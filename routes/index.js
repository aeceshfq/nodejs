const express = require("express");
const router = express.Router();

router.get("/", (req,res) =>{
    res.send("Hello word!");
});

router.get("/name/:name", (req,res) =>{
    let name = req.params.name;
    let c = req.params.c;
    res.send("Welcome mr. "+name);
    console.log("Welcome "+name);
});





module.exports = router;