require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')

let API_KEY = process.env.API_KEY


// search by cuisine & diet
router.get('/', (req, res) => {
    let search = {
        cuisine: req.query.cuisine,
        diet: req.query.diet
    }
    const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${search.cuisine}&diet=${search.diet}`
    axios.get(searchUrl)
    .then((response) => {
        let recipes = response.data
        res.render('show', {recipes})
        console.log(recipes)
    })
    .catch(err => {
        console.log(err)
    })
})

// show details
router.get('/detail', (req, res) => {
    let rId = req.query.r_id
    const searchUrl = `https://api.spoonacular.com/recipes/${rId}/information?apiKey=${API_KEY}`
    axios.get(searchUrl)
    .then((response) => {
        let recipe = response.data
        res.render('detail', {recipe})
        console.log(recipe)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router