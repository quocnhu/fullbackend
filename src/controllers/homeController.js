//router.Method('/route', handler)
const pool = require('../config/database')
const {getAllUsers} = require('../services/CRUDServices')
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

const homePage = async (req, res) => {
    let results = await getAllUsers() //if we do not use 'await' it will return {}
    res.render('home.ejs',{listUsers: results})
}
// HANDLE CRUD -------------------

// const postCreateUser = (req, res) => {
//     console.log('Check what client sent', req.body) //rember req = request, res= response
//     res.send('created user')
// }
// -----------CALLBACK----------------
// const postCreateUser = (req, res) => {
//     let {name,email,city} = req.body;
//     console.log('check>>', name,email,city)
//     //BECAUSE YOU IMPORTED DB ALREADY
//     //method --> connection.query('mysql syntax', passing values, responding function)
//     pool.query( //you are using 'pool' not connection.
//         `INSERT INTO users (name,email,city) VALUES (?,?,?)`,
//         [name,email,city],
//         function (err, results) {
//             res.send('Imported data to db')
//         }

//     )

// }
//--------------PROMISE------------------
const postCreateUser = async(req, res) => {
    let {name,email,city} = req.body; //returning to object why we use object dis
    // console.log('check>>', req.body)

    let {results, fields} = await pool.query( //you are using 'pool' not connection.
        `INSERT INTO users (name,email,city) VALUES (?,?,?)`,
        [name,email,city]
    )
    // res.send('CREATED USER SUCCESSFUL')
    res.redirect('/home')
    // SELECT  ---> [], ELSE ---> {} in this case we can use both
}
//HANDLE PAGES BY NAVIGATING
const getCreatePage =(req,res) => {
    res.render('create.ejs')
}

const getUpdatePage =(req,res) => {
    let userId = req.params.id
    console.log("showing params:>>", req.params, userId)
    res.render('edit.ejs')
}
module.exports = {
    getHomepage,
    renderEjs,
    homePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}