require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')

let API_KEY = process.env.API_KEY

// search by cuisine & diet & type
router.get('/', (req, res) => {
    let search = {
        cuisine: req.query.cuisine,
        diet: req.query.diet,
        type: req.query.type,
        offset: req.query.offset
    }
    const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${search.cuisine}&diet=${search.diet}&type=${search.type}&offset=${search.offset}`
    axios.get(searchUrl)
    .then((response) => {
        console.log(response.data)
        let recipes = response.data
        res.render('show', {recipes, search})
    }).catch(err => {
        console.log(err)
    })
})
// natural language search
router.get('/language', (req, res) => {
    let search = {
        input: req.query.input
    }
    const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${search.input}`
    axios.get(searchUrl)
    .then((response) => {
        console.log(response.data)
        let recipes = response.data
        res.render('show', {recipes, search})
    }).catch(err => {
        console.log(err)
    })
})

// show details
router.get('/detail', (req, res) => {
    let rId = req.query.r_id
    const searchUrl2 = `https://api.spoonacular.com/recipes/${rId}/information?apiKey=${API_KEY}`
    axios.get(searchUrl2)
    .then((response) => {
        let recipe = response.data
        console.log(recipe)
        res.render('detail', {recipe})
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router