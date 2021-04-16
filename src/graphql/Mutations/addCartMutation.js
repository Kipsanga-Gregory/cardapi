///////////////////////////////////////////////////////////
///  Defining the addCartMutation Mutation
///________________************____________________________

module.exports = `
    addCart(
        _id: String,
        totalAmount: Float,
        userId: String,
        products: String,
    ): Cart
`

//TODO The products value above is an Array, make it input type