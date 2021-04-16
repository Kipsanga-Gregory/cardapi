///////////////////////////////////////////////////////////
///  Defining the addUser Mutation
///________________************____________________________

module.exports = `
    addUser(
        public_name: String,
        imageUrl: String,
        email: String,
        phone: Float,
        password: String,
        address: String
    ): Users
`