///////////////////////////////////////////////////////////
///  Defining the ProductsMutation Mutation
///________________************____________________________

module.exports = `
    addProduct(
        _id: String,
        imageUrl: String,
        price: Float,
        name: String,
        description: String,
        store_id: String,
    ): Products
`

