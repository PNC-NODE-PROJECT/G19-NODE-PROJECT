// express to run
const express = require("express");

// use route to run
const router = express.Router();

// allow json file
router.use(express.json());

// import fuction 
const modeles = require("../models/quiz_func");

// Get all questions from database : GET (/quiz)
router.get("/",(req,res) =>{
    res.send(modeles.getAll());
})

// Create new questions add to database : POST (/add)
router.post("/add",(req,res) =>{
    let question = req.body;
    console.log(question);
    modeles.createNew(question);
    res.send("Created successed!");
})

// Delete question 
router.delete("/:id",(req,res) =>{
    let id = req.params.id;
    modeles.Delete(id);
    res.send("Deleted Success!");
})

// edit question 
router.get("/:id",(req,res) =>{
    let id = req.params.id;
    res.send(modeles.edit(id));
})

// update questions 
router.patch("/:id",(req,res) =>{
    let id = req.params.id;
    let editQuestion = req.body;
    modeles.update(id,editQuestion);
    res.send("Updated Success!");
})

// export router server
module.exports = router;