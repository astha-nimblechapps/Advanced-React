
const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {

    //items: forwardTo('db'),
    itemsConnection: forwardTo('db'),
    item: forwardTo('db'),

    items(parent, args, ctxt, info){
        return ctxt.db.query.items(args);
    },

    me(parent, args, ctx, info) {
        // check if there is a current user ID
        if (!ctx.request.userId) {
          return null;
        }
        return ctx.db.query.user(
          {
            where: { id: ctx.request.userId },
          },
          info
        );
      },
      async users(parent, args,ctxt, info){
        if(!ctxt.request.userId){
          throw new Error("Please Logged In")
        }

        hasPermission(ctxt.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

        return ctxt.db.query.users({},info);

      }
    // dogs(parent, args, ctxt, info ){
    //     global.dogs = global.dogs || [];

    //     return global.dogs
    // },
};

module.exports = Query;
