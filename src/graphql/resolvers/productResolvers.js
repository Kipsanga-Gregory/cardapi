///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  Feb 2021
///
///__________________************______________________________

const { Product } = require('../../mongo/schema')


module.exports = {
    Query: {
        async allProducts () {
            let result = await Product.find().exec()
            return result
      },
        async getProduct(_, args) {
            console.log(args)
            let result = await Product.find({ _id: args.id }).exec()
            return result
        },
        async getProductByCatalogue(_, args) {
            console.log(args)
            let result = await Product.find({ storeId: args.storeId }).exec()
            return result
        }
    },
    Mutation: {
        async addProduct(_, args) {

            console.log(args)
            try {
                let response = await Product.create(args)
                return response
            } catch (error) {
                console.log(error)
                return error.message
            }
      }
    },
    Products: {
    //   products: () => {},
    },
  }