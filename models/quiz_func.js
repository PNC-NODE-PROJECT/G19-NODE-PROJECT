
// file system moudle (fs)
const fs = require("fs");

// file database
const database = "data/database.json";

// load question and answer
function load(){
    let questions = fs.readFileSync(database);
    return JSON.parse(questions);
}

// save question and answer to database file
function save(question){
    return fs.writeFileSync(database,JSON.stringify(question));
}

// get all questions 
function getAll(){
    let questions = load();
    return questions;
}

// create new question 
function createNew(question){
    // load questions 
    let questions = load();

    // add new question
    questions.push(question);

    // save again
    save(questions);
}

// edit question 
function edit(id){
    console.log("good");
}

// delete question
function Delete(id){
    console.log("food");
}

// export fuctions to main file
module.exports.getAll = getAll;
module.exports.createNew = createNew;
module.exports.Delete = Delete;
module.exports.edit = edit;

