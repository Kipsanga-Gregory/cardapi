///////////////////////////////////////////////////////////
///  Defining the addMerchantMutation Mutation
///________________************____________________________

module.exports = `
    addMerchant(
        password: String,
        imageUrl: String,
        email: String,
        phone: Float,
        Address: String,
        whatsappLink: String,
        companyName: String,
        status: String,
    ): Merchant
`