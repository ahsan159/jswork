
let js;// = require('jsonfile');

let questionMaxCount = 5;
let questionCurrent = 0;

let gameStatus;

let a = Math.random()*25+1;
a = Math.floor(a);
let cans = a*a;
console.log(a);
console.log(cans);
let score;
let answerClicked;


let questionAsked = {
    statement:`Square of ${a} is`,
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
    questionAsked.statement = `Square of ${a} is`;
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
    // console.log(JSON.stringify(questionAsked));
}

window.onload = (() => {
    console.log("I am starting");

    // document.getElementById("preBtn").hidden = true;
    // document.getElementById("nxtBtn").hidden = true;

    // document.getElementById("questions")
    document.getElementById("questions").hidden = true;
    document.getElementById("ans1R").checked = false;
    document.getElementById("ans2R").checked = false;
    document.getElementById("ans3R").checked = false;
    document.getElementById("ans4R").checked = false;
    //document.getElementById("questions").hidden = true;
    
    // js = require('jsonfile');
    
    score = 0;
    gameStatus = "ready";
    //startFunction();
});

function radioClicked(event) {
    // console.log(event);
    console.log(event.target.id);
    document.getElementById("ans1R").checked = false;
    document.getElementById("ans2R").checked = false;
    document.getElementById("ans3R").checked = false;
    document.getElementById("ans4R").checked = false;
    document.getElementById(event.target.id).checked = true;
    answerClicked = document.getElementById(event.target.id).nextElementSibling.textContent;
    // if (questionAsked.correct == document.getElementById(event.target.id).nextElementSibling.textContent)
    // {
    //     console.log("answer is correct");
    // }
}

function startFunction() {
    // console.log("start the quiz");
    if (gameStatus == "ready")
    {
        // console.log("here");
        document.getElementById("startBtn").textContent = "Next"
        document.getElementById("questions").hidden = false;
        document.getElementsByClassName("score")[0].hidden = true;
        gameStatus = "inprogress";
        makeQuestion();
    }
    else if (gameStatus == "inprogress")
    {
        document.getElementById("startBtn").textContent = "Next";
        document.getElementsByClassName("score")[0].hidden = false;
        nextQuestion();
    }   
    //makeQuestion();
}

function nextQuestion() {
    // console.log(answerClicked + " vs " + questionAsked.correct);
    document.getElementsByClassName("score")[0].hidden = true;
    if (questionAsked.correct==answerClicked)
    {
        score = score  + 1;
        // console.log(`score is ${score}.`);
        // document.getElementsByClassName("score")[0].textContent = `Your score is ${score}`;
    }
    // document.getElementById("preBtn").disabled = false;
    // document.getElementById("nxtBtn").disabled = false;
    // console.log("nextQuestion");
    questionCurrent = questionCurrent + 1;
    if (questionCurrent >= questionMaxCount) {
        document.getElementById("questions").hidden = true;
        document.getElementById("startBtn").textContent = "Click to Start!!!"
        document.getElementsByClassName("score")[0].hidden = false;
        document.getElementsByClassName("score")[0].textContent = `Your score is ${score}`;
        gameStatus = "ready";
        score = 0;
        questionCurrent = 0;
    }
    // console.log(questionCurrent);
    makeQuestion();
    document.getElementById("ans1R").checked = false;
    document.getElementById("ans2R").checked = false;
    document.getElementById("ans3R").checked = false;
    document.getElementById("ans4R").checked = false;
}

// function prevQuestion() {
//     // document.getElementById("preBtn").disabled = false;
//     // document.getElementById("nxtBtn").disabled = false;
//     console.log("prevQuestion");
//     questionCurrent = questionCurrent - 1;
//     if (questionCurrent <= 0) {
//         // document.getElementById("preBtn").disabled = true;
//         questionCurrent = 0;
//     }
//     // console.log(questionCurrent);
//     makeQuestion();
// }