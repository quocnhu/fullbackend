const express = require('express')
const {getHomepage,renderEjs,homePage,postCreateUser} = require('../controllers/homeController')
const router = express.Router()

//HOMEPAGE
router.get('/',getHomepage)

router.get('/nhubackend',renderEjs)

router.get('/home',homePage)

//handle crud------
router.post('/create-user', postCreateUser)

module.exports = router;
// because in this case we do not need to use 'express' so just replace router 