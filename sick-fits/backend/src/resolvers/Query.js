
const { forwardTo } = require('prisma-binding');

const Query = {

    //items: forwardTo('db'),
    itemsConnection: forwardTo('db'),
    item: forwardTo('db'),

    items(parent, args, ctxt, info){
        return ctxt.db.query.items(args);
    }

    // dogs(parent, args, ctxt, info ){
    //     global.dogs = global.dogs || [];

    //     return global.dogs
    // },
};

module.exports = Query;
