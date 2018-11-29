const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  //items: forwardTo('db'),
  itemsConnection: forwardTo("db"),
  item: forwardTo("db"),

  items(parent, args, ctxt, info) {
    return ctxt.db.query.items(args);
  },

  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async tempCartItem(parent, args, ctxt, info) {
  //  console.log("Astha",args.token)
    if(!args.token) throw new Error("Token not found")
    return await ctxt.db.query.tempCartItems(
      {
        where: { token: args.token }
      },
      info
    );
  },
  async users(parent, args, ctxt, info) {
    if (!ctxt.request.userId) {
      throw new Error("Please Logged In");
    }

    hasPermission(ctxt.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    return ctxt.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You arent logged in!");
    }

    const order = await ctx.db.query.order(
      {
        where: { id: args.id }
      },
      info
    );

    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      "ADMIN"
    );
    if (!ownsOrder || !hasPermission) {
      throw new Error("You cant see this buddd");
    }

    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error("you must be signed in!");
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId }
        }
      },
      info
    );
  }
  // dogs(parent, args, ctxt, info ){
  //     global.dogs = global.dogs || [];

  //     return global.dogs
  // },
};

module.exports = Query;
