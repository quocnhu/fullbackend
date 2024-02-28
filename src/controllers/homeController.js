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

const getHomepage = (req, res) => {
    //precess data
    //call model
    let users = [];
    pool.query('SELECT * FROM users', function (err, results, fields) { 
        users = results;
        console.log('>>results on mysql:',results);  

        console.log('>>check users:',users);
        res.send(JSON.stringify(users))                    //sync
      });
}



const renderEjs = (req,res) => {
    res.render('sample.ejs')
}

const helloWorld = (req, res) => {
    res.send('Hello man!')
}
module.exports = {
    getHomepage,
    renderEjs,
    helloWorld
}