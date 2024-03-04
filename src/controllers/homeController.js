//router.Method('/route', handler)
const pool = require('../config/database')
const {getAllUsers,getUserId,updateUserId} = require('../services/CRUDServices')
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
// these pass to route
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

const getUpdatePage = async (req,res) => {
    let userId = req.params.id
    // console.log("showing params:>>", req.params, userId)
    // res.render('edit.ejs')
    // let [results, fields] = await pool.query(` SELECT * FROM users where id = ?`,[userId]) 
    // console.log(results)
    // let user = results && results.length > 0 ? results[0] : {}; //to check that may be user enter a route not existed or that item is deleted
    // console.log(user)
    let user = await getUserId(userId)
    res.render('edit.ejs', {userEdit : user});
}

const postUpdateUser = async (req,res) => {
    
    let {id,name,email,city} = req.body
    await updateUserId(name,email,city,id)
    // // console.log("check content:>>>>",req.body)
    // let [results, fields] = await pool.query (`
    // UPDATE users SET name = ?, email = ?, city = ?
    // WHERE id = ?`,[name,email,city,id]); //OMG --> i made a mistake when i put id at the first position
    
    res.redirect('/home')
    

  

}
module.exports = {
    getHomepage,
    renderEjs,
    homePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}