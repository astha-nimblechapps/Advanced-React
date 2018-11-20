const Mutations = {
    async createItem(parent, args, ctxt, info){
       const item = await ctxt.db.mutation.createItem({
           data: {
               ...args
           }
       })

       return item
    },
    updateItem(parent, args, ctxt, info){
        const update = {...args};
        delete update.id;
        return ctxt.db.mutation.updateItem({
            data: update,
            where:{
                id: args.id
            }
        }, info)
    },
    async deleteItem(parent,args,ctxt,info){
        const where = { id: args.id }
        const item = await ctxt.db.query.item({ where }, `{ id title}`); 
        //TODO
        return ctxt.db.mutation.deleteItem({where},info)
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
