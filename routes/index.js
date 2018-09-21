const express = require("express");
const router = express.Router();
const app = express();
const User = require('../models/User');

router.get("/", (req,res) =>{
    res.send("Hello word!");
});

router.get("/name/:name", (req,res) =>{
    let name = req.params.name;
    let c = req.params.c;
    res.send("Welcome mr. "+name);
    console.log("Welcome "+name);
});

router.route('/add-user/:firstname').post(function (req, res) {
    // const user_obj = new User(req.body);
    // user_obj.save()
    //   .then(user_obj => {
    //       res.json('A new user was added successfully');
    //       console.log('A new user was added successfully');
    //   })
    //   .catch(err => {
    //   res.status(400).send("unable to save to database");
    //   console.log('Error! unable to save to database');
    //   });

    res.json('Data');


});

router.route('/get-user').get(function (req, res) {
    res.json('Data');
});


module.exports = router;