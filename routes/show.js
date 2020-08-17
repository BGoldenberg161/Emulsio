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
    const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${search.cuisine}&diet=${search.diet}`
    axios.get(searchUrl)
    .then((response) => {
        let recipies = response.data
        res.render('show', {recipies})
        console.log(recipies)
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/detail', (req, res) => {
    let rId = req.query.r_id
    const searchUrl = `https://api.spoonacular.com/recipes/${rId}/information?apiKey=${API_KEY}`
    axios.get(searchUrl)
    .then((response) => {
        let recipie = response.data
        res.render('detail', {recipie})
        console.log(recipie)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router