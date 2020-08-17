require('dotenv').config()
const express = require('express')
const router = express.Router()
const db = require('../models')
const axios = require('axios')

let API_KEY = process.env.API_KEY

router.get('/', (req, res) => {
    let search = {
        cuisine: req.query.cuisine,
        diet: req.query.diet
    }
    console.log(search)
    // axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`, search)
    // .then((response) => {
    //     let recipies = response.data
    //     res.render('show', {recipies})
    //     console.log(recipies)
    // })
    .catch(err => {
        console.log(err)
    })
  })

module.exports = router