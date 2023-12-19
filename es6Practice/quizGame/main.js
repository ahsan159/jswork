
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

function makeQuestion()
{
    a = Math.random()*25 + 1;
    a = Math.floor(a);
    cans = a*a;
    questionAsked.statement = `square of ${a} is`;
    questionAsked.correct = cans;
    let cOption = Math.random()*4 + 1;
    cOption = Math.floor(cOption);
    if (cOption==1)
    {
        questionAsked.option1 = cans;
    }
    else if(cOption==2)
    {
        questionAsked.option2 = cans;
    }
    else if(cOption==3)
    {
        questionAsked.option3 = cans;
    }
    else if(cOption==4)
    {
        questionAsked.option4 = cans;
    }
    // This is important because setting text for radio button label is somewhat different
    document.getElementById("question").innerText = questionAsked.statement;
    document.getElementById("ans1R").nextElementSibling.textContent = questionAsked.option1;
    document.getElementById("ans2R").nextElementSibling.textContent = questionAsked.option2;
    document.getElementById("ans3R").nextElementSibling.textContent = questionAsked.option3;
    document.getElementById("ans4R").nextElementSibling.textContent = questionAsked.option4;
    console.log(JSON.stringify(questionAsked));
}

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
    makeQuestion();
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
    makeQuestion();
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
    makeQuestion();
}