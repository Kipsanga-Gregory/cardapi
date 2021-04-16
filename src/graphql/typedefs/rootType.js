///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  Feb 2021
///
///__________________************______________________________

const addCartMutation = require('../Mutations/addCartMutation')
const addMerchantMutation = require('../Mutations/addMerchantMutation')
const addOrderMutation = require('../Mutations/addOrderMutation')
const addUserMutation = require('../Mutations/addUserMutation')
const loginMutation = require('../Mutations/loginMutation')
const productMutations = require('../Mutations/productMutations')

const MerchatQuery = require('../Queries/allMerchants')
const cartQueries = require('../Queries/cartQueries')
const ordersQueries = require('../Queries/ordersQueries')
const productQueries = require('../Queries/productQueries')

///////////////////////////////////////////////////////////
///  The Root Query Type
///________________************____________________________
module.exports = `
    type Query {
        """returns all users"""
        allUsers: [Users],
        """returns user data matching the provided ID"""
        getUser( _id: ID ): [Users]
        ${MerchatQuery}
        ${ordersQueries}
        ${productQueries}
        ${cartQueries}
    }
    type Mutation {
        ${addUserMutation},
        ${loginMutation},
        ${addMerchantMutation},
        ${addOrderMutation},
        ${productMutations}
        ${addCartMutation}
    }
`