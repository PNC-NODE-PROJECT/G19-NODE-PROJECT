//============================================== Call all scenarios========================================
let first_scenario = document.querySelector('.first_scenario');
let second_scenario = document.querySelector('.second_scenario');
let third_scenario = document.querySelector('.third_scenario');
//============================================== Call all btns ============================================
let goBtn = document.querySelector('.go');
let playBtn = document.querySelector('.play');
let createBtn = document.querySelector('.create');
// ================================= Hide some scenario when it first start ===============================
second_scenario.style.display = "none"
third_scenario.style.display = "none"

// =========================================== All function blocks ========================================
function hideFirst_scenario() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "block"
};

function showPlayQuizPart() {
    first_scenario.style.display = "none"
    second_scenario.style.display = "none"
    third_scenario.style.display = "block"
};
goBtn.addEventListener('click', hideFirst_scenario);
playBtn.addEventListener('click', showPlayQuizPart);