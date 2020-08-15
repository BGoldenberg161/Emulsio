require('dotenv').config()
const express = require('express')
const router = express.Router()
const db = require('../models')
// import SpoonacularApi from 'spoonacular_api' /// ES6 standard?
const SpoonacularApi = require('spoonacular_api')

let API_KEY = process.env.API_KEY

router.get('/', (req, res) => {
    let apiInstance = new SpoonacularApi.DefaultApi()
    let q = req.body // String | The recipe search query.
    console.log(q)
    // apiInstance.analyzeARecipeSearchQuery(q, (error, data, response) => {
    // if (error) {
    //     console.error(error)
    // } else {
    //     console.log('API called successfully. Returned data: ' + data)
    // }
    // });
});