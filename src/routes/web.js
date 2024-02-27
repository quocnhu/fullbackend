const express = require('express')
const {getHomepage,renderEjs,helloWorld} = require('../controllers/homeController')
const router = express.Router()

//HOMEPAGE
router.get('/',getHomepage)

router.get('/hello', helloWorld)

router.get('/nhubackend',renderEjs)

module.exports = router;
// because in this case we do not need to use 'express' so just replace router 