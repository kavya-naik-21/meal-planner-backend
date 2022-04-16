
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

const PORT = 9900;

app.listen(PORT, console.log("App is listening at port", +PORT))


app.get('/',(req,res,next)=>{
    res.send('Welcome to IHDS app')
})

