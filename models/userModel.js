const mongoose = require('mongoose')
const Schema = mongoose.Schema



const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phoneNum: {
        type: String
    },
    password: {
        type: String
    }
})

const user = mongoose.model('users', userSchema)

module.exports = user