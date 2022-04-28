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
    // modeles.createNew(question);
    res.send("Created successed!");
})

// Delete question 
router.delete("/:id",(req,res) =>{
    let questions = modeles.getAll();

})

// update questions 
router.patch("/update",(req,res) =>{
    
})

// export router server
module.exports = router;