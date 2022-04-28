//============================================== Call all scenarios========================================
// @ Open Quiz 
let first_scenario = document.querySelector('.first_scenario');
// @ Menu Page 
let second_scenario = document.querySelector('.second_scenario');
// @ Create Quiz Page 
let third_scenario = document.querySelector('.third_scenario');
// @ Play Quiz Page
let fourth_scenario = document.querySelector('.fourth_scenario');
// @containerOfThe answer
let answerBlock = document.querySelector('.answerBlock');
// @questions Line
let question = document.querySelector('.question');
let getQuestion = document.querySelector('#question');
let getAnswer1 = document.querySelector('#answer1');
let getAnswer2 = document.querySelector('#answer2');
let getAnswer3 = document.querySelector('#answer3');
let getAnswer4 = document.querySelector('#answer4');
let selectAnswer1 = document.querySelector('.selection1');
let selectAnswer2 = document.querySelector('.selection2');
let selectAnswer3 = document.querySelector('.selection3');
let selectAnswer4 = document.querySelector('.selection4');
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
    // =========================================== Variables ========================================
let datas = [];
let questionId = 0;
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
// @ Got to play quiz after create

function gotToPlayQuiz() {
    faEdit.style.display = 'none'
    faTrashAlt.style.display = "none"
    question.style.border = "none"
    question.style.background = "none"
    question.style.color = "white"
    newPlayBtn.style.display = 'none'
    answerBlock.style.display = 'block'
}

function getAndSaveDataFromUser() {

    let object = {
        "questionId": questionId,
        "question": getQuestion.value,
        arrayOfAnswer: []
    };

    object.arrayOfAnswer.push({ "option": getAnswer1.value, "isCorrect": selectAnswer1.value });
    object.arrayOfAnswer.push({ "option": getAnswer2.value, "isCorrect": selectAnswer2.value });
    object.arrayOfAnswer.push({ "option": getAnswer3.value, "isCorrect": selectAnswer3.value });
    object.arrayOfAnswer.push({ "option": getAnswer4.value, "isCorrect": selectAnswer4.value });
    datas.push(object);
    questionId += 1;
    console.log(datas)
}

// function createQuiz() {
//     let listOfQuestion = document.createElement('div');
//     listOfQuestion.append(h1);
//     let h1 = document.createElement('h1');

// }
// =============================== Event Parts ============================
goBtn.addEventListener('click', hideFirst_scenario);
playBtn.addEventListener('click', showPlayQuizPart);
createBtn.addEventListener('click', showCreateQuizForm);
addBtn.addEventListener('click', afterAddQuiz);
newPlayBtn.addEventListener('click', gotToPlayQuiz);