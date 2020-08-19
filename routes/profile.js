const express = require('express')
const router = express.Router()
const db = require('../models')

// push bin finformation to page
router.get('/', (req, res)=>{
    db.bin.findAll({
        where: {userId: req.user.id} 
    }).then( bins => {
        console.log(bins)
      res.render('profile', { bins })
    }).catch((err) => {
      console.log('Error', err)
    })
})


// add recipe to bin
router.post('/folders', (req, res) => {
    db.bin.findOrCreate({
        where: {userTitle: req.body.folderName,
                userId: req.user.id}
    }).then( bin => {
        db.recipe.findOrCreate({
            where: {foodId: req.body.foodId,
                    image: req.body.foodImg, 
                    title: req.body.foodTitle}
        }).then( recipe => {
            db.binsRecipes.findOrCreate({
                where: { binId: bin[0].id, 
                         recipeId: recipe[0].id}
            }).catch(err => {
                console.log('Error:', err)
            })
        })
    }).then(()=>{
        res.redirect('/profile')
    }).catch(err => {
        console.log('Error:', err)
    })
})

// Delete folder from profile
router.delete('/folders', (req, res) => {
      db.bin.destroy({
        where: {userTitle: req.body.name,
                userId: req.user.id}
      }).then( () =>{
        res.redirect('/profile')
      }).catch(err => { 
      console.log('Error:', err) // render error
    })
})

// show folder items
router.get('/folders/show/:id', (req, res) => {
    db.bin.findByPk(req.params.id, { 
        include: { model: db.recipe }
        }).then( folder => {
            let recipes = folder.recipes
            res.render('folder', {recipes})
        }).catch(err => { 
            console.log('Error:', err) // render error
    })
})

// delete recipe from folder
router.delete('/poof', (req, res) => {
    console.log(req.body.id)
    db.recipe.destroy({
      where: {id: req.body.id}
    }).then( () =>{
      res.redirect('/profile')
    }).catch(err => { 
    console.log('Error:', err) // render error
  })
})
module.exports = router