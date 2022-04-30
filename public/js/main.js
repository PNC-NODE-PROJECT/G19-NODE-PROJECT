//============================================== Call all scenarios========================================

// @ Open Quiz 
let first_scenario = document.querySelector('.first_scenario');
// @ Menu Page 
let second_scenario = document.querySelector('.second_scenario');
// @ Create Quiz Page 
let third_scenario = document.querySelector('.third_scenario');
// @containerOfThe answer
let answerBlock = document.querySelector('.answerBlock');
let body = document.querySelector('body');


// @questions Line
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
    // =========================================== Variables ========================================

let questionId = 0;
let index = 0;
const URL = "http://localhost:80/quiz";
// =========================================== All function blocks ========================================
function hideFirst_scenario() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "block"
};

function hide(param) {
    param.style.display = 'none';
}

function show(param) {
    param.style.display = 'block';
}
let score = 0;

function displayQuizOnebyOne(event) {

    const correct = event.target.dataset.correct
    let y = correct.toString();


    if (y !== 'true') {

        score += 3
    } else {
        score += 1
    }

    console.log(score)
}


function showPlayQuizPart() {

    hide(first_scenario)
    hide(second_scenario)

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
            let trash = document.createElement('i');
            trash.className = "fas fa-trash-alt fa-sm mr-4";
            trash.style.color = "rgb(254, 32, 32)"
            let i2 = document.createElement('i');
            i2.className = "fas fa-edit fa-sm";
            i2.style.color = "rgb(32, 150, 254)"
            h1.appendChild(trash);
            h1.appendChild(i2);

            listOfQuestion.appendChild(h1);
            let newAnswerBlock = document.createElement('div');
            newAnswerBlock.className = "answerBlock";
            for (let oneAnswer of val.arrayOfAnswer) {
                let btn = document.createElement('button');
                btn.className = 'btn answer text-white';
                btn.type = 'submit';
                btn.dataset.correct = oneAnswer.isCorrect;
                btn.textContent = oneAnswer.option;

                btn.addEventListener('click', () => {
                    btn.style.backgroundColor = 'gray';
                    hide(container);
                    index += 1;
                    displayQuizOnebyOne(event);


                })
                let br = document.createElement('br');
                newAnswerBlock.appendChild(btn);
                newAnswerBlock.appendChild(br);
            }

            hide(trash);
            hide(i2);
            // let con = document.querySelector('.newCon');
            // console.log(con[0])
            listOfQuestion.appendChild(newAnswerBlock);
            container.appendChild(listOfQuestion);
            // hide(container);
            body.appendChild(container);

        }
    }).catch(error => console.log('something error!'));

};

function showCreateQuizForm() {
    hide(first_scenario)
    hide(second_scenario)
    show(third_scenario)
};

function displayQuiz() {
    showCreateQuizForm()




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
// newPlayBtn.addEventListener('click', gotToPlayQuiz);