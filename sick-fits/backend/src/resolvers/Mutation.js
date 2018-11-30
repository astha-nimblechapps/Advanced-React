const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeNiceEmail } = require("../mail");
const { hasPermission } = require("../utils");
const stripe = require("../stripe");

const Mutations = {
  async createItem(parent, args, ctxt, info) {
    if (!ctxt.request.userId) {
      throw new Error("You must be logged in");
    }
    const item = await ctxt.db.mutation.createItem({
      data: {
        user: {
          connect: {
            id: ctxt.request.userId
          }
        },
        ...args
      }
    });

    return item;
  },
  updateItem(parent, args, ctxt, info) {
    const update = { ...args };
    delete update.id;
    return ctxt.db.mutation.updateItem(
      {
        data: update,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  updateUser(parent, args, ctxt, info) {
   // console.log(args)
    
    const update = { ...args };
    delete update.id;
    return ctxt.db.mutation.updateUser(
      {
        data: update,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async deleteItem(parent, args, ctxt, info) {
    const where = { id: args.id };
    const item = await ctxt.db.query.item({ where }, `{ id title user{ id }}`);
    //TODO
    const ownsItem = item.user.id === ctxt.request.userId;
    const hasPermissions = ctxt.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    return ctxt.db.mutation.deleteItem({ where }, info);
  },
  async singup(parent, args, ctxt, info) {
    if(!args){
      throw new Error("Please enter all details");
    }
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctxt.db.mutation.createUser(
      {
        data: {
          ...args,
          password: password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    ctxt.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return user;
  },
  async signin(parent, { email, password, token }, ctxt, info) {
    if(!email || !password){
      throw new Error("Please Fill all the details");
    }
    const user = await ctxt.db.query.user({
      where: { email: email }
    });
    if (!user) {
      throw new Error("Email and password is incorrect");
    }
    if (token) {
      const tempCartItem = await ctxt.db.query.tempCartItems(
        {
          where: { token: token }
        },
        `{ id, item { id }, quantity, color, size}`
      );
     
      if (tempCartItem) {
        const cart = await tempCartItem.map(
          async (cartItem) =>{
            
            const order = await ctxt.db.mutation.createCartItem(
              {
                data: {
                  quantity: cartItem.quantity,
                  color: cartItem.color,
                  size: cartItem.size,
                  user: {
                    connect: {
                      id: user.id
                    }
                  },
                  item: {
                    connect: {
                      id: cartItem.item.id
                    }
                  }
                }
              }
            )
            if(order){
                await ctxt.db.mutation.deleteTempCartItem(
                    {
                      where: { id: cartItem.id }
                    },
                    info
                  );
            }
            return order
            })
        
      }
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Email and password is incorrect");
    }
    const token_log = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    ctxt.response.cookie("token", token_log, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return user;
  },
  async signout(parent, args, ctxt, info) {
    ctxt.response.clearCookie("token");
    return { messgae: "Successfully Logged Out" };
  },
  async requestReset(parent, args, ctxt, info) {
    const user = await ctxt.db.query.user({
      where: { email: args.email }
    });

    if (!user) {
      throw new Error("Email is not register");
    }
    const randomBytesPromis = promisify(randomBytes);
    const resetToken = (await randomBytesPromis(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;
    const res = await ctxt.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken: resetToken, resetTokenExpiry: resetTokenExpiry }
    });
   // console.log(res);
    const mailRes = await transport.sendMail({
      from: "demo@gmail.com",
      to: user.email,
      subject: "Your Password Reset",
      html: makeNiceEmail(
        `Your Password Reset Link is here..!! \n \n <a href="${
          process.env.FRONTEND_URL
        }/resetPassword?resetToken=${resetToken}">Click Here to Reset Password </a> `
      )
    });

    return { message: "Thanks" };
  },
  async resetPassword(parent, args, ctxt, info) {
    if (args.password !== args.confirmPassword) {
      throw new Error("Your password does not match");
    }
    const [user] = await ctxt.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error("This token is invalid or expiried");
    }
    const password = await bcrypt.hash(args.password, 10);
    const updateuser = await ctxt.db.mutation.updateUser({
      where: { email: user.email },
      data: { password: password, resetToken: null, resetTokenExpiry: null }
    });
    const token = jwt.sign({ userId: updateuser.id }, process.env.APP_SECRET);
    ctxt.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    return updateuser;
  },
  async updatePermissions(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }
    // 2. Query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );
    // 3. Check if they have permissions to do this
    hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);
    // 4. Update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions
          }
        },
        where: {
          id: args.userId
        }
      },
      info
    );
  },
  async addToCart(parent, args, ctxt, info) {
    const userId = ctxt.request.userId;
    if (!userId) throw new Error("Please Login Frist");

    const [existingCartItem] = await ctxt.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id }
      }
    });
    if (existingCartItem) {
     // console.log("This item is already in cart");
      return ctxt.db.mutation.updateCartItem(
        {
          where: {
            id: existingCartItem.id
          },
          data: {
            quantity: existingCartItem.quantity + 1
          }
        },
        info
      );
    }
    return ctxt.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: {
              id: userId
            }
          },
          item: {
            connect: {
              id: args.id
            }
          }
        }
      },
      info
    );
  },
  async removeFromCart(parent, args, ctx, info) {
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id
        }
      },
      `{ id, user { id }}`
    );

    if (!cartItem) throw new Error("No CartItem Found!");

    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error("Cheatin huhhhh");
    }

    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id }
      },
      info
    );
  },
  async createOrder(parent, args, ctxt, info) {
    const { userId } = ctxt.request;
    if (!userId) throw new Error("You must be logged in");
    const user = await ctxt.db.query.user(
      {
        where: { id: userId }
      },
      `{ 
            id 
            name 
            email 
            cart{ 
                id 
                quantity 
                item{ title price id description image largeImage} 
            } 
        }`
    );
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    );

    const charge = await stripe.charges.create({
      amount,
      currency: "USD",
      source: args.token
    });

    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: {
          connect: { id: userId }
        }
      };
      delete orderItem.id;
      return orderItem;
    });

    const order = await ctxt.db.mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: { create: orderItems },
        user: { connect: { id: userId } }
      }
    });

    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctxt.db.mutation.deleteManyCartItems({
      where: { id: cartItemIds }
    });

    return order;
  },
  async addToTempCart(parent, args, ctxt, info) {
    const [existingCartItem] = await ctxt.db.query.tempCartItems({
      where: {
        AND: {
          item: { id: args.id },
          token: args.token
        }
      }
    });
    if (existingCartItem) {
     // console.log("This item is already in cart");

      // console.log(existingToken);
      return ctxt.db.mutation.updateTempCartItem(
        {
          where: {
            id: existingCartItem.id
          },
          data: {
            quantity: existingCartItem.quantity + 1,
            color: args.color,
            size: args.size
          }
        },
        info
      );
    }
    return ctxt.db.mutation.createTempCartItem(
      {
        data: {
          token: args.token,
          color: args.color,
          size: args.size,
          item: {
            connect: {
              id: args.id
            }
          }
        }
      },
      info
    );
  },
  async removeFromTempCart(parent, args, ctx, info) {
    const cartItem = await ctx.db.query.tempCartItem(
      {
        where: {
          id: args.id
        }
      },
      `{ id }`
    );

    if (!cartItem) throw new Error("No CartItem Found!");

    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error("Cheatin huhhhh");
    }

    return ctx.db.mutation.deleteTempCartItem(
      {
        where: { id: args.id }
      },
      info
    );
  }
  // createDog(parent, args, ctxt, info){
  //     global.dogs = global.dogs || []
  //     const newDog = { name: args.name }
  //     global.dogs.push(newDog)
  //     console.log(args)
  //     return newDog
  // },
};

module.exports = Mutations;
