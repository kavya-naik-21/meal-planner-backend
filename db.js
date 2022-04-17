const mongoose = require('mongoose') //installed 5.0 version of mongoose as 6. above was giving error with "express": "^4.17.3",


//creating and exporting connection module
module.exports = async function connection() {
    try {
        //trying to
        //creating connection parameters
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
        // connecting to database using the DB environment variable and connectionParams
        await mongoose.connect(process.env.DB, connectionParams,6000000)
        console.log("Connected to database")
    } catch (error) {
        //if some error then catch it
        console.log(error)
        console.log("Could not connect to database")
    }
}

/*


*/