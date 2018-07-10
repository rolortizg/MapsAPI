const express = require('express');
const router  = express.Router();
const Restaurant = require('../models/Resturant.js');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/list",(req,res)=>{
  Restaurant.find()
  .then(rests=>{
    res.render('restaurants/list', {rests})
  })
  .catch(e=>{
    console.log(e);
  })
})

router.get('/new',(req,res)=>{
    // Restaurant.create({name:'pescadito'}) --> para comprobar que funciona
    res.render('restaurants/newRest');
})

router.post('/new',(req,res)=>{
    Restaurant.create(req.body)
    .then(resta=>{
      res.json(resta)
    })
    .catch(e=>{
      console.log(e);
    })
})

router.get('/list/:id',(req,res)=>{
  Restaurant.findById(req.params.id)
  .then(restaurant=>{
    res.render('restaurants/restDetail', restaurant)
  })
  .catch(e=>{
    console.log(e)
  })
})
module.exports = router;
