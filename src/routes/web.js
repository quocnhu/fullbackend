const express = require('express')
const {getHomepage,renderEjs,homePage,postCreateUser,getCreatePage} = require('../controllers/homeController')
const router = express.Router()

//HOMEPAGE
router.get('/',getHomepage)

router.get('/nhubackend',renderEjs)

router.get('/home',homePage)

//HANDLING PAGE
router.get('/create', getCreatePage)

//HANDLING CRUD------
router.post('/create-user', postCreateUser)

module.exports = router;
// because in this case we do not need to use 'express' so just replace router 