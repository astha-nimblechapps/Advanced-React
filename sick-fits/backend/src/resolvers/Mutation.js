const Mutations = {
    async createItem(parent, args, ctxt, info){
       const item = await ctxt.db.mutation.createItem({
           data: {
               ...args
           }
       })

       return item
    },
    // createDog(parent, args, ctxt, info){
    //     global.dogs = global.dogs || []
    //     const newDog = { name: args.name }
    //     global.dogs.push(newDog)
    //     console.log(args)
    //     return newDog
    // },
};

module.exports = Mutations;
