const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res)=>{
    db.bin.findAll()
    .then((folders) => {
      res.render('profile', { folders })
    })
    .catch((err) => {
      console.log('Error', err)
    })
})