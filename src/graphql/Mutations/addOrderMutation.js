///////////////////////////////////////////////////////////
///  Defining the addUser Mutation
///________________************____________________________

module.exports = `
    addOrders(
        totalAmount: Float,
        userId: String,
        productId: String,
        Address: String,
        status: String,
        storeId: String
    ): Orders
`