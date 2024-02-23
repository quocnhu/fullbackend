const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! You just made first initializing')
  })
router.get('/nhubackend', (req, res) => {
    //res.send('Hello new path')
    res.render('sample.ejs') // dynamic rendering 
  })

module.exports = router;
// because in this case we do not need to use 'express' so just replace router 