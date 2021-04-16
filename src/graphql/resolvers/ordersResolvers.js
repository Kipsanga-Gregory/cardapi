///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  Feb 2021
///
///__________________************______________________________

const { Orders } = require('../../mongo/schema')


module.exports = {
    Query: {
        async allOrders () {
            let result = await Orders.find().exec()
            return result
      },
        async getOrder(_, args) {
            console.log(args)
            let result = await Orders.find({ _id: args.id }).exec()
            return result
        },
        async getOrdersByCatalogue(_, args) {
            console.log(args)
            let result = await Orders.find({ storeId: args.storeId }).exec()
            return result
        }
    },
    Mutation: {
        async addOrders(_, args) {

            console.log(args)
            try {
                let response = await Orders.create(args)
                return response
            } catch (error) {
                console.log(error)
                return error.message
            }
      }
    },
    Orders: {
    //   products: () => {},
    },
  }