//============================================== Call all scenarios========================================
// @ Open Quiz 
let first_scenario = document.querySelector('.first_scenario');
// @ Menu Page 
let second_scenario = document.querySelector('.second_scenario');
// @ Create Quiz Page 
let third_scenario = document.querySelector('.third_scenario');
// @ Play Quiz Page
let fourth_scenario = document.querySelector('.fourth_scenario');
let answerBlock = document.querySelector('.answerBlock');
let question = document.querySelector('.question');
//============================================== Call all btns ============================================
let goBtn = document.querySelector('.go');
let playBtn = document.querySelector('.play');
let createBtn = document.querySelector('.create');
let addBtn = document.querySelector('.add');
let newPlayBtn = document.querySelector('.newPlay');
let faTrashAlt = document.querySelector('.fa-trash-alt');
let faEdit = document.querySelector('.fa-edit');

// ================================= Hide some scenario when it first start ===============================
second_scenario.style.display = "none"
third_scenario.style.display = "none"
fourth_scenario.style.display = "none"
    // =========================================== All function blocks ========================================
function hideFirst_scenario() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "block"
};

function showPlayQuizPart() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "none"
    fourth_scenario.style.display = "block"
    question.style.color = "white"
    faEdit.style.display = 'none'
    faTrashAlt.style.display = "none"
    newPlayBtn.style.display = 'none'

};

function showCreateQuizForm() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "none"
    third_scenario.style.display = "none"
    third_scenario.style.display = "block"
};

function afterAddQuiz() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "none"
    third_scenario.style.display = "block"
    fourth_scenario.style.display = "block"
    answerBlock.style.display = 'none'
    question.style.border = "1px solid black"
    question.style.background = "white"
    question.style.color = "black"
};

function gotToPlayQuiz() {
    faEdit.style.display = 'none'
    faTrashAlt.style.display = "none"
    question.style.border = "none"
    question.style.background = "none"
    question.style.color = "white"
    newPlayBtn.style.display = 'none'
    answerBlock.style.display = 'block'
}
goBtn.addEventListener('click', hideFirst_scenario);
playBtn.addEventListener('click', showPlayQuizPart);
createBtn.addEventListener('click', showCreateQuizForm);
addBtn.addEventListener('click', afterAddQuiz);
newPlayBtn.addEventListener('click', gotToPlayQuiz);