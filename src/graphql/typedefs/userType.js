    ///////////////////////////////////////////////////////////
    ///  Defining the User Type
    ///________________************____________________________
    module.exports = `
    """
    UsersType
    """
    type Users {
        _id: String,
        public_name: String,
        imageUrl: String,
        email: String,
        phone: Float,
        password: String,
        address: String,
        isAuth: Boolean,
        loginMesssage: String
    },
    input UsersInput {
        public_name: String,
        imageUrl: String,
        email: String,
        phone: Float,
        password: String,
        address: String,
        loginMesssage: String
    }
`