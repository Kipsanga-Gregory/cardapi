    ///////////////////////////////////////////////////////////
    ///  Defining the Cart Type
    ///________________************____________________________
    module.exports = `
    """
    CartsType
    """
    type Cart {
        _id: String,
        totalAmount: Float,
        userId: String,
        products: [Products],
    }
`