    ///////////////////////////////////////////////////////////
    ///  Defining the Merchant Type
    ///________________************____________________________
    module.exports = `
    """
    MerchantType
    """
    type Merchant {
    _id: String,
    password: String,
    imageUrl: String,
    email: String,
    phone: Float,
    Address: String,
    whatsappLink: String,
    companyName: String,
    status: String,
    },
    input MerchantInput {
    password: String,
    imageUrl: String,
    email: String,
    phone: Float,
    Address: String,
    whatsappLink: String,
    companyName: String,
    status: String,
    }
`