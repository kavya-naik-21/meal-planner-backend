const { response } = require('express')
const meal = require('../models/mealmodel')


// show the list of meals from db


// takes request body and gives back reponse
const show = (req, res, next) => {
    meal.find()                // mongoose query //returns all of the meals from database
        .then(response => {
            res.json({
                response
            })
            //if found then returns res as response in json form
        })
        .catch(error => {
            res.json({
                message: error+'An error occured'
            })
            //if not found the returns message:an err... in json format as the response
        })
}






//store meal 
const store=(req,res,next)=>{
    console.log("store function called")
    console.log(req.body.name)
    let _meal=new meal({
        name:req.body.name,
        description: req.body.description,
        method:req.body.method
    })

    _meal.save()
    .then(response=>{
        res.json({
            message:'Meal added successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: error+" error occured"
        })
    })
}



module.exports={
    show,store
}