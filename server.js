//SET UP ENV
require('dotenv').config();
const express = require('express');
const path = require('path'); //in case you template location does not work (is available)
const app = express();
const port = process.env.PORT || 7676
const configViewEngine = require('./src/config/viewEngine')
const webroutes = require('./src/routes/web')
//-----CONFIGURE TEMPLATE ENGINE + STATIC FILES JUST IN ONE FUNCTION
configViewEngine(app);
//-----ROUTES---------
app.use('/',webroutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





//------CONFIGURE TEMPLATE ENGINE
// app.set('views', './src/views')//this place used to teach where is rendering engine template located
// app.set('views', path.join(__dirname, './src/views'));
// app.set('view engine', 'ejs')
//------STATIC FILE
// app.use(express.static(path.join(__dirname, './src/public')))
//-----ROUTES
// app.get('/', (req, res) => {
//   res.send('Hello World! You just made first initializing')
// })
// app.get('/nhubackend', (req, res) => {
//   //res.send('Hello new path')
//   res.render('sample.ejs') // dynamic rendering 
// })