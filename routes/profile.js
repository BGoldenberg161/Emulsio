const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res)=>{
    console.log(req.user)
    // db.user.findOne({
    //     where: {userId: req.user.dataValues.id}, 
    // })
    // .then( user => {
    //   res.render('profile', { user })
    // })
    // .catch((err) => {
    //   console.log('Error', err)
    // })
})

router.post('/folders', (req, res) => {
    db.bin.findOrCreate({
        where: {userTitle: req.body.folderName,
            userId: req.user.dataValues.id
        }
    })
    res.redirect('/profile')
    .catch(err => {
        console.log('Error:', err)
    })
})

module.exports = router