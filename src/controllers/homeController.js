//router.Method('/route', handler)
const pool = require('../config/database')
// const getHomepage = (req, res) => {
//     precess data
//     call model
//     let users = [];
//     pool.query('SELECT * FROM users', function (err, results, fields) { 
//         users = results;
//         console.log('>>results on mysql:',results);                      //async
//       });
//     console.log('>>check users:',users);
//     res.send('Hello world! QuocNhu fullstack serverside rendering')
// }
// ----------------show to template -------------------------
const getHomepage = (req, res) => {
    //precess data
    //call model
    let users = [];
    pool.query('select * from users', function (err, results, fields) { 
        console.log('>>results on mysql:',results); // this to show at backend by nodejs 
        
        // console.log('>>check users:',users);
        users = results;
        res.send(JSON.stringify(users))                    //sync
      });
}



const renderEjs = (req,res) => {
    res.render('sample.ejs')
}

const homePage = (req, res) => {
    res.render('home.ejs')
}
// HANDLE CRUD -------------------

const postCreateUser = (req, res) => {
    console.log('Check what client sent', req.body) //rember req = request, res= response
    res.send('created user')
}
module.exports = {
    getHomepage,
    renderEjs,
    homePage,
    postCreateUser,
}