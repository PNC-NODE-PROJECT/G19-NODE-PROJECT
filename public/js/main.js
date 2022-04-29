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
let body = document.querySelector('body');


// @questions Line
let question = document.querySelectorAll('.question');

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
let newPlayBtn = document.querySelectorAll('.newPlay');
let faTrashAlt = document.querySelectorAll('.fa-trash-alt');
let faEdit = document.querySelectorAll('.fa-edit');

// ================================= Hide some scenario when it first start ===============================
second_scenario.style.display = "none"
third_scenario.style.display = "none"
fourth_scenario.style.display = "none"
    // =========================================== Variables ========================================

let questionId = 0;

const URL = "http://localhost:80/quiz";
// =========================================== All function blocks ========================================
function hideFirst_scenario() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "block"
};

function showPlayQuizPart() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "none"
    axios.get(URL).then(afterAddQuiz = (response) => {

        let alldata = response.data;

        for (let val of alldata) {

            let container = document.createElement('div');
            container.className = 'container newCon fourth_scenario mt-3 border border-3 text-center';
            container.style.width = "60%";
            container.style.height = "90vh";
            let listOfQuestion = document.createElement('div');
            listOfQuestion.className = 'listOfQuestion';
            let h1 = document.createElement('h1');
            h1.className = 'question';
            h1.textContent = val.question;
            h1.style.color = 'white';
            let i1 = document.createElement('i');
            i1.className = "fas fa-trash-alt fa-sm mr-4";
            i1.style.color = "rgb(254, 32, 32)"
            let i2 = document.createElement('i');
            i2.className = "fas fa-edit fa-sm";
            i2.style.color = "rgb(32, 150, 254)"
            h1.appendChild(i1);
            h1.appendChild(i2);

            listOfQuestion.appendChild(h1);
            let newAnswerBlock = document.createElement('div');
            newAnswerBlock.className = "answerBlock";
            for (let oneAnswer of val.arrayOfAnswer) {
                let btn = document.createElement('button');
                btn.className = 'btn answer text-white';
                btn.type = 'submit';

                btn.onclick = function() { container.style.display = 'bock' };
                btn.textContent = oneAnswer.option;
                let br = document.createElement('br');
                newAnswerBlock.appendChild(btn);
                newAnswerBlock.appendChild(br);
            }
            i1.style.display = 'none';
            i2.style.display = "none";
            listOfQuestion.appendChild(newAnswerBlock)
            container.appendChild(listOfQuestion);
            // container.style.display = 'none';
            body.appendChild(container);

            faEdit[0].style.display = 'none'
            faTrashAlt[0].style.display = "none"
            newPlayBtn[0].style.display = 'none'
        }
    }).catch(error => console.log('something error!'));
    fourth_scenario.style.display = "block"
    question.style.color = "white"

};

function showCreateQuizForm() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "none"
    third_scenario.style.display = "none"
    third_scenario.style.display = "block"
};

function displayQuiz() {

    first_scenario.style.display = "none"
    second_scenario.style.display = "none"
    third_scenario.style.display = "block"
    fourth_scenario.style.display = "block"

    question[0].style.border = "1px solid black"
    question[0].style.background = "white"
    question[0].style.color = "black"



}
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
let addUrl = URL + "/add";

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
    questionId += 1;
    axios.post(addUrl, object).then(displayQuiz).catch(error => console.log('Something Error'));
}

// =============================== Event Parts ============================
goBtn.addEventListener('click', hideFirst_scenario);
playBtn.addEventListener('click', showPlayQuizPart);
createBtn.addEventListener('click', showCreateQuizForm);
addBtn.addEventListener('click', getAndSaveDataFromUser);
newPlayBtn.addEventListener('click', gotToPlayQuiz);