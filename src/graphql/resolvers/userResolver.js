///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  Feb 2021
///
///__________________************______________________________

const { User } = require('../../mongo/schema')
const argon2 = require('argon2');


module.exports = {
    Query: {
        async allUsers () {
            let result = await User.find().exec()
            return result
      },
        async getUser(_, args) {
            console.log(args)
            let result = await User.find({ _id: args._id }).exec()
            return result
        }
    },
    Mutation: {
        async addUser(_, args) {
            //TODO    Hash Pin with password below
            console.log(args)
            try {
                ///////////////////////////////////////////////////////////
                ///  We hash the password before storage below
                ///________________************____________________________
                let hashedData = {...args, password: await argon2.hash(args.password)}
                console.log(hashedData)
                let response = await User.create(hashedData)
                console.log(response)
                return response
            } catch (error) {
                console.log(error)
                return error.message
            }
      },

      async loginMutation (_, args) {
          try {
              let userdata = await User.find({ email: args.email }).exec()
              if (userdata[0]) {
                ///////////////////////////////////////////////////////////
                ///  we compare the hashed pass and plain to authenticate below
                ///________________************____________________________

                  if (await argon2.verify(userdata[0].password, args.password)) {
                    //TODO    Make a JWT Token to be sent alongside the success
                   
                    let responseData = {...userdata[0]._doc, loginMesssage:"Password match successfully", isAuth: true}
                     
                    return responseData
                } else {
                    return {loginMesssage:"Password did not match", isAuth: false}
                }
              } else {
                  return {loginMesssage: "User does not exist", isAuth: false}
              }
          } catch (error) {
              console.log(error)
              return { loginMessage: error }
          }

      }
    },
    Users: {
    //   products: () => {},
    },
  }