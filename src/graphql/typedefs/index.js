///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  Feb 2021
///
///__________________************______________________________

const { mergeTypeDefs } = require('@graphql-tools/merge');

const rootQueryType = require('./rootType')
const UserType = require('./userType')
const merchantType = require('./merchantType');
const ordersType = require('./ordersType');
const productsType = require('./productsType');
const cartType = require('./cartType');

///////////////////////////////////////////////////////////
///  Merge the various Types below
///________________************____________________________
const typedefs = mergeTypeDefs([
    rootQueryType,
    UserType,
    merchantType,
    ordersType,
    productsType,
    cartType
]);

module.exports = typedefs;