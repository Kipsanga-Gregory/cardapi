///////////////////////////////////////////////////////////////
///
///                  Code by Greg K Limo
///     Visit        www.greglimo.com
///                  Feb 2021
///
///__________________************______________________________

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = "mongodb+srv://admin:4NZcbHXBIRFl9xWI@cluster0.t1itu.mongodb.net/cardapi?retryWrites=true&w=majority";
// 1THKYJr3zZCyWcG0

mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });
 
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
