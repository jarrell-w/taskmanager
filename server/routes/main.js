const express = require('express');
const router = express.Router();

//Database model
const Task = require('../models/task')
//This will allow the body to be parsed 
// with the keys being given by the "name" property // Import bodyParser
const bodyParser = require('body-parser');
//set route to use middleware that handles form data, extended
//is optional to handle more complex data. 
router.use(bodyParser.urlencoded({ extended: true }))


router.get("/", async (req, res) => {
    locals = {
        title: "Taskly",
        description: "A simple task manager"
    }
    try {
        const data = await Task.find()
        res.render('index', {locals, data})
    } catch(e) {
        console.log(e)
    }
})
router.post("/submit", (req, res) => {
    const {title,body} = req.body
    console.log(title, body)
    const data = {
        title,
        body
    }
    try {
      Task.create(data);  
      res.status(200)
      res.redirect('/')
    } catch (e) {
        console.log(e)
        res.sendStatus(400).send('Failed to send to database')
    }
    
} )


//Exporting router:
module.exports = router

