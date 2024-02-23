const express = require('express');
const path = require('path'); //in case you template location does not work (is available)
const app = express();
//SET UP ENV
require('dotenv').config();
const port = process.env.PORT || 7676


//CONFIGURE TEMPLATE ENGINE
  // app.set('views', './src/views')//this place used to teach where is rendering engine template located
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs')

//DECLEARING ROUTES
app.get('/', (req, res) => {
  res.send('Hello World! You just made first initializing')
})
app.get('/nhubackend', (req, res) => {
    //res.send('Hello new path')
    res.render('sample.ejs') // dynamic rendering 
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})