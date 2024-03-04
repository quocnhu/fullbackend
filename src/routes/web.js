const express = require('express')
const {getHomepage,renderEjs,homePage,postCreateUser,getCreatePage,getUpdatePage,postUpdateUser} = require('../controllers/homeController')
const router = express.Router()

//HOMEPAGE
router.get('/',getHomepage)

router.get('/nhubackend',renderEjs)

router.get('/home',homePage)

//HANDLING PAGE BY NAVIGATING
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage) // add :id because i want to have any error

//HANDLING CRUD------
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)

module.exports = router;
// because in this case we do not need to use 'express' so just replace router 