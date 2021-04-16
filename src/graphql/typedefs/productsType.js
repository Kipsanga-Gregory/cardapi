    ///////////////////////////////////////////////////////////
    ///  Defining the Products Type
    ///________________************____________________________
    module.exports = `
    """
    ProductsType
    """
    type Products {
        _id: String,
        imageUrl: String,
        price: Float,
        name: String,
        description: String,
        store_id: String,
    }
`