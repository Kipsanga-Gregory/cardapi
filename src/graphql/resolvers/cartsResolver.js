///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  Feb 2021
///
///__________________************______________________________

const { Cart } = require('../../mongo/schema')


module.exports = {
    Query: {
        async allCarts () {
            let result = await Cart.find().exec()
            return result
      },
        async getCart(_, args) {
            console.log(args)
            let result = await Cart.find({ _id: args._id }).exec()
            return result
        }
    },
    Mutation: {
        async addCart(_, args) {

            try {
                let response = await Cart.create(args)
                console.log(response)
                return response
            } catch (error) {
                console.log(error)
                return error.message
            }
      }
    },
    Cart: {
    //   products: () => {},
    },
  }