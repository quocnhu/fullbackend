//SET UP ENV
require('dotenv').config();
const express = require('express');
const path = require('path'); //in case you template location does not work (is available)
const app = express();
const port = process.env.PORT || 7676
const configViewEngine = require('./src/config/viewEngine')
const webroutes = require('./src/routes/web')
const pool = require('./src/config/database')

//------before and after really important! ---GETING DATA FROM CLIENT TO SERVER----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-----CONFIGURE TEMPLATE ENGINE + STATIC FILES JUST IN ONE FUNCTION
configViewEngine(app);


//---CONNECTION DATABASE
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  }
  else {
    console.log('MySQL connected!');
    
  }

});

//-----ROUTES---------
app.use('/',webroutes) //root route

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

  //-----DATABASE----------
  // connection.connect((err) => {
  //   if (err) {
  //     console.error('Error connecting to MySQL:', err);
  //     return;
  //   }
  //   console.log('Connected to MySQL server again');
  
  // })
  // connection.query('SELECT * FROM users',(err,results,fields)=>{
  //   console.log('>>>Results:', results)
  // })