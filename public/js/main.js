    // ====================================== Call all container tags ======================================
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("section4");
    const section5 = document.getElementById("section5");
    const section6 = document.getElementById("section6");
    const section7 = document.getElementById("section7");

    //=========================================== Call play quiz tags ===========================================
    const domTitle = document.getElementById("title-question");
    const domAnswer1 = document.getElementById("answer1");
    const domAnswer2 = document.getElementById("answer2");
    const domAnswer3 = document.getElementById("answer3");
    const domAnswer4 = document.getElementById("answer4");


    // =========================================== tags in list all questions =======================================
    const domQuestion = document.getElementById("all-question");
    const header = document.getElementById("header");

    // ================================================= Variables ==================================================
    let currenIndexQuestion = 0;
    let score = 0
        // Store edit question
    let storeEditQuestion = null;
    // ================================================ Function Blocks =============================================
    //
    //
    // --------------------------------------------------- Fuction Show element -------------------------------------
    //@ Just create a main function to use in any place need.
    function show(element) {
        element.style.display = "block";
    }

    // -------------------------------------------------- Fuction Hide element --------------------------------------
    //@ Just create a main function to use in any place need.
    function hide(element) {
        element.style.display = "none";
    }

    // ----------------------------------------------- function get in quiz -----------------------------------------
    // @ hide open quiz part,
    // @ hide  show scores part,
    // @ show quiz menu.
    function getInQuiz() {
        hide(section1);
        show(section2);
        hide(section6);
    }

    // ------------------------------------------------ function back to open from menu part -------------------
    // @ show ope quiz/get in quiz part,
    //@ hide quiz menu part.
    function back() {
        show(section1);
        hide(section2);
    }

    // ------------------------------------------------ function show list question ----------------------------------
    //@ show play quiz part,
    // @ hide open quiz part,
    // @ hide quiz menu part.
    function showlist() {
        show(section3);
        hide(section1);
        hide(section2);
    }

    // ---------------------------------------------------- function back to manu --------------------------------------
    //@ hide play quiz part,
    // @ hide open quiz part,
    // @ show quiz menu part.
    function banckManu() {
        hide(section3);
        hide(section1);
        show(section2);
    }

    // ---------------------------------------------------- function play quiz -----------------------------------------
    //@ hide quiz menu part,
    // @ hide play quiz part,
    // @ show answer container part.
    function play() {
        hide(section2);
        hide(section3);
        show(section5);
    }

    // ----------------------------------------------------- function show form create quiz ----------------------------
    //@ show create quiz form part,
    function showForm() {
        show(section4);
    }

    // ---------------------------------------------------- function cancel create quiz --------------------------------
    //@ hide create quiz form  part,
    //@ show quiz  part,
    function cancel() {
        hide(section4);
        show(section3);
    }
    // ---------------------------------------------------- function to play quiz again --------------------------------
    //@ use window.location.reload to reload/refresh the browser
    function again() {
        window.location.reload();
    }

    // -------------------------------------------------- function to show correct answers ----------------------------------------
    //@ hide show scores part,
    //@ show correct answer part.
    function showSectionResult() {
        hide(section6);
        show(section7);
    }

    //--------------------------------------------------- back from show correct answers part -------------------------------------
    //@ swicth from above function.
    function backToScore() {
        hide(section7);
        show(section6);
    }




    // ---------------------------------------------------- function to save data ------------------------------------------------
    //@ get data from user input,
    //@ send to back end to store in json file
    function save(question) {
        axios.post("/quiz" + "/add", question).then(display);
    }

    // function update 
    function update(id, editQuestion) {
        axios.patch("/quiz" + "/" + id, editQuestion).then(display);
    }

    // ----------------------------------------------------- function create question --------------------------------------------
    //@ get all need tags one by one
    //@ get input value
    //@ set data as it type
    //@ defined answer good/bad
    //@ store in an array
    //@ send to backend
    //@ we use same function to be a creator/an updater
    function onCreate() {
        // get value from input
        let title = document.getElementById("title").value;
        let option1 = document.getElementById("option1").value;
        let option2 = document.getElementById("option2").value;
        let option3 = document.getElementById("option3").value;
        let option4 = document.getElementById("option4").value;

        // good answer
        let goodAnswer = document.querySelector(".answer");

        // validate input null/not
        if (title === "" || option1 === "" || option2 === "" || option3 === "" || option4 === "") {
            alert("Please input all filde!!!!");
        } else {
            if (storeEditQuestion !== null) {
                //create some 
                let editQuestion = {};
                let answers = [];
                let answer1 = {};
                let answer2 = {};
                let answer3 = {};
                let answer4 = {};

                // title question
                editQuestion["question"] = title;

                answer1["option1"] = option1;


                // set true or false answer
                if (goodAnswer[0].value === goodAnswer.value) {
                    answer1["isCorrect"] = true;
                } else {
                    answer1["isCorrect"] = false;
                }




                answer2["option2"] = option2;

                // set true or false answer
                if (goodAnswer[1].value === goodAnswer.value) {
                    answer2["isCorrect"] = true;
                } else {
                    answer2["isCorrect"] = false;
                }



                // answer question (option 3)
                answer3["option3"] = option3;

                // set true or false answer
                if (goodAnswer[2].value === goodAnswer.value) {
                    answer3["isCorrect"] = true;
                } else {
                    answer3["isCorrect"] = false;
                }

                // option 4
                answer4["option4"] = option4;

                // set true or false answer
                if (goodAnswer[3].value === goodAnswer.value) {
                    answer4["isCorrect"] = true;
                } else {
                    answer4["isCorrect"] = false;
                }
                // ---------------------------------------------------push all obj into an container array--------------------------------------------------------
                answers.push(answer1);
                answers.push(answer2);
                answers.push(answer3);
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


                // set true or false answer
                if (goodAnswer[0].value === goodAnswer.value) {
                    answer1["isCorrect"] = true;
                } else {
                    answer1["isCorrect"] = false;
                }



                // answer question (option 2)
                answer2["option2"] = option2;

                // set true or false answer
                if (goodAnswer[1].value === goodAnswer.value) {
                    answer2["isCorrect"] = true;
                } else {
                    answer2["isCorrect"] = false;
                }



                // answer question (option 3)
                answer3["option3"] = option3;

                // set true or false answer
                if (goodAnswer[2].value === goodAnswer.value) {
                    answer3["isCorrect"] = true;
                } else {
                    answer3["isCorrect"] = false;
                }



                // answer question (option 4)
                answer4["option4"] = option4;

                // set true or false answer
                if (goodAnswer[3].value === goodAnswer.value) {
                    answer4["isCorrect"] = true;
                } else {
                    answer4["isCorrect"] = false;
                }

                // ------------------------------------------------ push all obj into an container array -----------------------------------------------
                answers.push(answer1);
                answers.push(answer2);
                answers.push(answer3);
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
    function editQuestion(event) {
        // index question
        storeEditQuestion = event.target.parentElement.parentElement.dataset.index;

        axios.get("/quiz/" + storeEditQuestion).then(res => {
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



    // function delete question
    function deleteQestion(event) {
        // index question
        let index = event.target.parentElement.parentElement.dataset.index;

        // alert ask user
        if (confirm("Are your sure delete this question?")) {
            axios.delete("/quiz/" + index).then(display);
        }
    }
    // kkkk
    // ---------------------------------------------------- diplay questions ----------------------------------------------------
    //@ get datas from server
    //@ create tags
    //@ add value
    //@ display on DOM
    function display() {
        // get datas from server
        axios.get("/quiz").then(res => {
                let questions = res.data;
                // Remove the card and create a new one
                let listQuestion = document.getElementById("all-question");
                listQuestion.remove();
                listQuestion = document.createElement("div");
                listQuestion.id = "all-question";
                section3.appendChild(listQuestion);

                // Loop on datas,  create some new tags and defined value.
                for (let index = 0; index < questions.length; index++) {
                    let question = questions[index];

                    // ceate card
                    let card = document.createElement("div");
                    card.className = "card";
                    card.dataset.index = index;


                    //question title
                    let title = document.createElement("h3");
                    title.textContent = question.question;
                    // add title to card
                    card.appendChild(title)
                        // add card to list question
                    listQuestion.appendChild(card)

                    // create a card
                    let cardAction = document.createElement("div");
                    cardAction.className = "card-action";
                    card.appendChild(cardAction);

                    // create edit and delete btn and add event
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
    // ssssssssssss
    // ---------------------------------------------------- function display correct answers ------------------------------------
    //@ create a page to show correct answer
    //@ loop to get correct answer from server/json file
    function displayCorrectAnswer() {
        // get questions from backend
        axios.get("/quiz").then(res => {
                let questions = res.data;

                // Remove the card and create a new one
                let listCorrect = document.getElementById("all-correct");
                listCorrect.remove();
                listCorrect = document.createElement("div");
                listCorrect.id = "all-correct";
                section7.appendChild(listCorrect);


                // loop in datas,  create some new tags and defined value as the correct answer.
                for (let index = 0; index < questions.length; index++) {
                    let question = questions[index];

                    let card = document.createElement("div");
                    card.className = "card-correct";

                    // title question
                    let title = document.createElement("h3");
                    title.textContent = question.question;

                    card.appendChild(title)


                    let correctAnswer = document.createElement("h2");
                    if (question.answers[0].isCorrect === true) {
                        correctAnswer.textContent = "Correct : " + question.answers[0].option1;
                    } else if (question.answers[1].isCorrect === true) {
                        correctAnswer.textContent = "Correct : " + question.answers[1].option2;
                    } else if (question.answers[2].isCorrect === true) {
                        correctAnswer.textContent = "Correct : " + question.answers[2].option3;
                    } else if (question.answers[3].isCorrect === true) {
                        correctAnswer.textContent = "Correct : " + question.answers[3].option4;
                    }

                    card.appendChild(correctAnswer);
                    listCorrect.appendChild(card);
                }

            })
            .catch(error => {
                console.log("error something!!");
            })
    }


    // ---------------------------------------------------- function render quiz ----------------------------------------------------
    //@ get datas from backend and replace it in the needed tags.
    function renderQuestion() {
        axios.get("/quiz").then(res => {
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



    //========================================= Call all btn tags ==========================================
    const btnGo = document.getElementById("getInQuiz");
    const btnPlay = document.getElementById("play");
    const btnCreate = document.getElementById("create");
    const btnback = document.getElementById("back");
    const btnBackManu = document.getElementById("back-menu");
    const btnAdd = document.getElementById("add");
    const btnCancel = document.getElementById("cancel");
    const createQuiz = document.getElementById("create-quiz");
    const playAgain = document.getElementById("play-again");
    const showResult = document.getElementById("show-answer-result");
    const backScore = document.getElementById("back-inscore-part");
    const goManu = document.getElementById("go-menu");
    const playBtn = document.getElementById("play-menu");


    //---------------------------------------------------- Start play quiz---------------------------------------------
    btnPlay.addEventListener("click", (event) => {
        play();

        // reset current index question
        currenIndexQuestion = 0

        // render question 
        renderQuestion();

    })

    function playFromCreate() {
        play();
        renderQuestion();
    }
    //---------------------------------------------------- Check anser & sum scores -------------------------------------
    function checkAnswer(choice) {
        axios.get("/quiz").then(res => {
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

                // render next question 
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

        axios.get("/quiz").then(res => {
            let questions = res.data;

            // calculate the final scores of player in percent
            const scorePerCent = Math.round((100 * score) / questions.length);
            const domScore = document.getElementById("score");
            domScore.textContent = "Your score : " + scorePerCent + "%";
        })

    }

    // ============================================= All Event ==================================================
    btnGo.addEventListener("click", getInQuiz);
    btnback.addEventListener("click", back);
    btnCreate.addEventListener("click", showlist);
    btnBackManu.addEventListener("click", banckManu);
    btnAdd.addEventListener("click", showForm);
    btnCancel.addEventListener("click", cancel);
    createQuiz.addEventListener("click", onCreate);
    playAgain.addEventListener("click", again);
    showResult.addEventListener("click", showSectionResult);
    backScore.addEventListener("click", backToScore);
    goManu.addEventListener("click", again);
    playBtn.addEventListener('click', playFromCreate);



    // display question 
    display();

    // display corection answer 
    displayCorrectAnswer();