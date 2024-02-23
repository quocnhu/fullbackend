const path = require('path')
const express = require('express') //add this bacause static you use "express" in here

const configViewEngine = (app) => {
    //---TEMPLATE ENGINE----
    // console.log('check location:',path.join('./src', 'views'))
    // app.set('views', path.join(__dirname, './src/views'));
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    //---STATIC FILES---
    // app.use(express.static(path.join(__dirname, './src/public')))
    app.use(express.static(path.join('./src', 'public')))
}
module.exports =  configViewEngine;
//THIS FILE SAVING ALL OF CONFIGURATION