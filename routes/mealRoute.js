const express= require('express')
const router=express.Router()

const mealController = require('../controllers/mealController')

router.get('/show',mealController.show)
router.post('/store',mealController.store)

module.exports=router 
