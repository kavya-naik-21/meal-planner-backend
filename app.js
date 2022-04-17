require('dotenv').config()

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connection = require('./db')


const mealsRoutes=require('./routes/mealRoute')


const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))  // 30 mb -> because we will be using few images
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))  // 30 mb -> because we will be using few images
app.use(cors())

connection()

const PORT = process.env.PORT || 9900;

app.listen(process.env.PORT, console.log("App is listening at port", +PORT))

app.get('/',(req,res,next)=>{
    res.send('Welcome to Meal - Planner app')
})

app.use('/meals',mealsRoutes)