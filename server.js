const express = require('express')
const app = express()
const port = 3000

//CONFIGURE TEMPLATE ENGINE
app.set('views', './src/views')
app.set('view engine', 'ejs')

//DECLEARING ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/nhubackend', (req, res) => {
    //res.send('Hello new path')
    res.render('sample.ejs')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})