
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

// update question 
function update(id,editQuestion){
    let questions = load();
    let question = questions[id];
    question.question = editQuestion.question;
    question.answers = editQuestion.answers;

    // save again
    save(questions);
}

// delete question
function Delete(id){
    let questions = load();
    // remove question
    questions.splice(parseInt(id),1);
    // save question again
    save(questions);
}

// edit question 
function edit(id){
    let questions = load();
    let question = questions[id];
    return question;
}

// export fuctions to main file
module.exports.getAll = getAll;
module.exports.createNew = createNew;
module.exports.Delete = Delete;
module.exports.update = update;
module.exports.edit = edit;

