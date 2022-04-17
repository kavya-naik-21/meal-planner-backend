const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mealSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    method:{
        type:String
    }
})

const meal = mongoose.model('meals', mealSchema) 

module.exports = meal