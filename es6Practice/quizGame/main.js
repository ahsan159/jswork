
let js;// = require('jsonfile');

let questionMaxCount = 5;
let questionCurrent = 0;


let a = Math.random()*25+1;
a = Math.floor(a);
let cans = a*a;
console.log(a);
console.log(cans);

let questionAsked = {
    statement:`square of ${a} is`,
    correct: cans,
    option1 : 1,
    option2 :2,
    option3: 3,
    option4:  4
};

window.onload = (() => {
    console.log("I am starting");

    document.getElementById("preBtn").hidden = true;
    document.getElementById("nxtBtn").hidden = true;

    // document.getElementById("questions")
    document.getElementById("questions").hidden = true;
    document.getElementById("ans1R").checked = false;
    document.getElementById("ans2R").checked = false;
    document.getElementById("ans3R").checked = false;
    document.getElementById("ans4R").checked = false;
    // js = require('jsonfile');
});

function radioClicked(event) {
    // console.log(event);
    console.log(event.target.id);
    document.getElementById("ans1R").checked = false;
    document.getElementById("ans2R").checked = false;
    document.getElementById("ans3R").checked = false;
    document.getElementById("ans4R").checked = false;
    document.getElementById(event.target.id).checked = true;
}

function startFunction() {
    console.log("start the quiz");
    document.getElementById("questions").hidden = false;
    document.getElementById("startBtn").hidden = true;
    document.getElementById("preBtn").hidden = false;
    document.getElementById("nxtBtn").hidden = false;
}

function prevQuestion() {
    document.getElementById("preBtn").disabled = false;
    document.getElementById("nxtBtn").disabled = false;
    console.log("prevQuestion");
    questionCurrent = questionCurrent - 1;
    if (questionCurrent <= 0) {
        document.getElementById("preBtn").disabled = true;
        questionCurrent = 0;
    }
    console.log(questionCurrent);
}

function nextQuestion() {
    document.getElementById("preBtn").disabled = false;
    document.getElementById("nxtBtn").disabled = false;
    console.log("nextQuestion");
    questionCurrent = questionCurrent + 1;
    if (questionCurrent >= questionMaxCount) {
        document.getElementById("nxtBtn").disabled = true;
        questionCurrent = questionMaxCount - 1;
    }
    console.log(questionCurrent);
}