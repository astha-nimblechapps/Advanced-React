
const { forwardto } = require('prisma-binding');

const Query = {

    // items: forwardto('db'),

    items(parent, args, ctxt, info){
        return ctxt.db.query.items();
    }

    // dogs(parent, args, ctxt, info ){
    //     global.dogs = global.dogs || [];

    //     return global.dogs
    // },
};

module.exports = Query;
