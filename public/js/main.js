    // Dom section 
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("section4");
    const section5 = document.getElementById("section5");
    const section6 = document.getElementById("section6");
    const section7 = document.getElementById("section7");


    // Dom play quiz
    const domTitle = document.getElementById("title-question");
    const domAnswer1 = document.getElementById("answer1");
    const domAnswer2 = document.getElementById("answer2");
    const domAnswer3 = document.getElementById("answer3");
    const domAnswer4 = document.getElementById("answer4");


    // Dom list all questions 
    const domQuestion = document.getElementById("all-question");
    const header = document.getElementById("header");

    // Current index question
    let currenIndexQuestion = 0;

    let score = 0

    // Store edit question
    let storeEditQuestion = null;


    // Link url server
    const url = "http://localhost:80/quiz";


    // Fuction Show element
    function show(element) {
        element.style.display = "block";
    }

    // Fuction Hide element
    function hide(element) {
        element.style.display = "none";
    }

    // function login to play or create  
    function login() {
        hide(section1);
        show(section2);
        hide(section6);
    }

    // function back to login
    function backGo() {
        show(section1);
        hide(section2);
    }

    // function show list question
    function showlist() {
        show(section3);
        hide(section1);
        hide(section2);
    }

    // function back to manu
    function banckManu() {
        hide(section3);
        hide(section1);
        show(section2);
    }

    // function play quiz
    function play() {
        hide(section2);
        show(section5);
    }

    // function show form create quiz
    function showForm() {
        show(section4);
    }

    // function cancel create quiz
    function cancel() {
        hide(section4);
        show(section3);
    }

    function again() {
        window.location.reload();
    }

    // show correct answers
    function showSectionResult() {
        hide(section6);
        show(section7);
    }

    // back to score
    function backToScore() {
        hide(section7);
        show(section6);
    }




    // function save to server
    function save(question) {
        axios.post(url + "/add", question).then(display);
    }

    // function update 
    function update(id, editQuestion) {
        axios.patch(url + "/" + id, editQuestion).then(display);
    }

    // function create question
    function onCreate() {
        // get value from input
        let title = document.getElementById("title").value;
        let option1 = document.getElementById("option1").value;
        let option2 = document.getElementById("option2").value;
        let option3 = document.getElementById("option3").value;
        let option4 = document.getElementById("option4").value;

        // good answer
        let goodAnswer = document.querySelector(".answer");

        // check value null or not null
        if (title === "" || option1 === "" || option2 === "" || option3 === "" || option4 === "") {
            alert("Please input all filde!!!!");
        } else {
            if (storeEditQuestion !== null) {
                let editQuestion = {};
                let answers = [];
                let answer1 = {};
                let answer2 = {};
                let answer3 = {};
                let answer4 = {};


                // title question
                editQuestion["question"] = title;

                // answer question (option 1)
                answer1["option1"] = option1;


                // set answer1 (true)
                if (goodAnswer[0].value === goodAnswer.value) {
                    answer1["isCorrect"] = true;
                } else {
                    answer1["isCorrect"] = false;
                }

                // add to answers (option 1)
                answers.push(answer1);

                // answer question (option 2)
                answer2["option2"] = option2;

                // set answer 2 (true)
                if (goodAnswer[1].value === goodAnswer.value) {
                    answer2["isCorrect"] = true;
                } else {
                    answer2["isCorrect"] = false;
                }

                // add to answers (option 2)
                answers.push(answer2);

                // answer question (option 3)
                answer3["option3"] = option3;

                // set answer 3 (true)
                if (goodAnswer[2].value === goodAnswer.value) {
                    answer3["isCorrect"] = true;
                } else {
                    answer3["isCorrect"] = false;
                }

                // add to answers (option 3)
                answers.push(answer3);

                // answer question (option 4)
                answer4["option4"] = option4;

                // set answer 4
                if (goodAnswer[3].value === goodAnswer.value) {
                    answer4["isCorrect"] = true;
                } else {
                    answer4["isCorrect"] = false;
                }

                // add to answers (option 4)
                answers.push(answer4);
                editQuestion["answers"] = answers;

                // update question
                update(storeEditQuestion, editQuestion);

                // hide form crate question
                hide(section4);

            } else {

                let newQuestion = {};
                let answers = [];
                let answer1 = {};
                let answer2 = {};
                let answer3 = {};
                let answer4 = {};


                // title question
                newQuestion["question"] = title;

                // answer question (option 1)
                answer1["option1"] = option1;


                // set answer1 (true)
                if (goodAnswer[0].value === goodAnswer.value) {
                    answer1["isCorrect"] = true;
                } else {
                    answer1["isCorrect"] = false;
                }

                // add to answers (option 1)
                answers.push(answer1);

                // answer question (option 2)
                answer2["option2"] = option2;

                // set answer 2 (true)
                if (goodAnswer[1].value === goodAnswer.value) {
                    answer2["isCorrect"] = true;
                } else {
                    answer2["isCorrect"] = false;
                }

                // add to answers (option 2)
                answers.push(answer2);

                // answer question (option 3)
                answer3["option3"] = option3;

                // set answer 3 (true)
                if (goodAnswer[2].value === goodAnswer.value) {
                    answer3["isCorrect"] = true;
                } else {
                    answer3["isCorrect"] = false;
                }

                // add to answers (option 3)
                answers.push(answer3);

                // answer question (option 4)
                answer4["option4"] = option4;

                // set answer 4
                if (goodAnswer[3].value === goodAnswer.value) {
                    answer4["isCorrect"] = true;
                } else {
                    answer4["isCorrect"] = false;
                }

                // add to answers (option 4)
                answers.push(answer4);
                newQuestion["answers"] = answers;

                // Save to server
                save(newQuestion);

                // hide form crate question
                hide(section4);

            }
        }


    }


    // function edit question 
    function editQuestion(event){
        // index question
        storeEditQuestion = event.target.parentElement.parentElement.dataset.index;

        axios.get(url + "/" + storeEditQuestion).then(res =>{
            let question = res.data;

            // set to value to input
            document.getElementById("title").value = question.question;
            document.getElementById("option1").value = question.answers[0].option1;
            document.getElementById("option2").value = question.answers[1].option2;
            document.getElementById("option3").value = question.answers[2].option3;
            document.getElementById("option4").value = question.answers[3].option4;

            header.textContent = "Edit Question";
            createQuiz.textContent = "Update";
            show(section4);
        })
    }






    // diplay questions
    function display() {
        // get questions from backend
        axios.get(url).then(res => {
                let questions = res.data;


                // Remove the card and create a new one
                let listQuestion = document.getElementById("all-question");
                listQuestion.remove();
                listQuestion = document.createElement("div");
                listQuestion.id = "all-question";
                section3.appendChild(listQuestion);

                // For all questions,  create a new div, and append it the list question
                for (let index = 0; index < questions.length; index++) {
                    let question = questions[index];

                    // Card question
                    let card = document.createElement("div");
                    card.className = "card";
                    card.dataset.index = index;


                    // title question
                    let title = document.createElement("h3");
                    title.textContent = question.question;
                    // add title to card
                    card.appendChild(title)
                        // add card to list question
                    listQuestion.appendChild(card)

                    // card action
                    let cardAction = document.createElement("div");
                    cardAction.className = "card-action";
                    card.appendChild(cardAction);

                    // button edit and delete
                    let edit = document.createElement("i");
                    edit.className = "fa fa-pencil-square-o";
                    edit.addEventListener("click", editQuestion)
                    cardAction.appendChild(edit);


                    let Delete = document.createElement("i");
                    Delete.className = "fa fa-trash";
                    Delete.addEventListener("click", deleteQestion)
                    cardAction.appendChild(Delete);
                }
            })
            .catch(error => {
                console.log("error something!!");
            })
    }




    // function render quiz 
    function renderQuestion() {

        axios.get(url).then(res => {
            let storeQuestion = res.data;
            if (storeQuestion !== null) {
                let questions = storeQuestion;

                let question = questions[currenIndexQuestion];

                domTitle.textContent = question.question;
                domAnswer1.textContent = question.answers[0].option1;
                domAnswer2.textContent = question.answers[1].option2;
                domAnswer3.textContent = question.answers[2].option3;
                domAnswer4.textContent = question.answers[3].option4;
            }

        })

    }



    // button dom
    const btnGo = document.getElementById("login");
    const btnPlay = document.getElementById("play");
    const btnCreate = document.getElementById("create");
    const btnBackGo = document.getElementById("back-go");
    const btnBackManu = document.getElementById("back-manu");
    const btnAdd = document.getElementById("add");
    const btnCancel = document.getElementById("cancel");
    const createQuiz = document.getElementById("create-quiz");
    const playAgain = document.getElementById("play-again");
    const showResult = document.getElementById("show-answer-result");
    const backScore = document.getElementById("back-score");
    const goManu = document.getElementById("go-manu");


    // Start play quiz
    btnPlay.addEventListener("click", (event) => {
        // show play quiz
        play();

        // reset current index question
        currenIndexQuestion = 0

        // render question 
        renderQuestion();

    })

    // Check answer 
    function checkAnswer(choice) {
        axios.get(url).then(res => {
            let questions = res.data;

            let question = questions[currenIndexQuestion];
            if (choice === "option1") {
                if (question.answers[0].isCorrect === true) {
                    score += 1;
                }
            } else if (choice === "option2") {
                if (question.answers[1].isCorrect === true) {
                    score += 1;
                }
            } else if (choice === "option3") {
                if (question.answers[2].isCorrect === true) {
                    score += 1;
                }
            } else if (choice === "option4") {
                if (question.answers[3].isCorrect === true) {
                    score += 1;
                }
            }

            if (currenIndexQuestion < questions.length - 1) {
                // go to next question
                currenIndexQuestion += 1;

                // render nex question 
                renderQuestion();
            } else {
                // show score
                showScore();
            }

        })
    }

    // function show score
    function showScore() {
        hide(section5)
        show(section6);

        axios.get(url).then(res => {
            let questions = res.data;

            // calculate the amount of question percent answered by the user
            const scorePerCent = Math.round((100 * score) / questions.length);
            const domScore = document.getElementById("score");
            domScore.textContent = "Your score : " + scorePerCent + "%";
        })

    }

    // action button 
    btnGo.addEventListener("click", login);
    btnBackGo.addEventListener("click", backGo);
    btnCreate.addEventListener("click", showlist);
    btnBackManu.addEventListener("click", banckManu);
    btnAdd.addEventListener("click", showForm);
    btnCancel.addEventListener("click", cancel);
    createQuiz.addEventListener("click", onCreate);
    playAgain.addEventListener("click", again);
    showResult.addEventListener("click", showSectionResult);
    backScore.addEventListener("click", backToScore);
    goManu.addEventListener("click", again);



    // display question 
    display();