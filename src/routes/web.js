const express = require('express')
const {getHomepage} = require('../controllers/homeController')
const router = express.Router()

//HOMEPAGE
router.get('/',getHomepage)

module.exports = router;
// because in this case we do not need to use 'express' so just replace router 