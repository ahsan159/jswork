
function radioClicked(event)
{
    // console.log(event);
    console.log(event.target.id);
    document.getElementById("ans1R").checked = false;
    document.getElementById("ans2R").checked = false;
    document.getElementById("ans3R").checked = false;
    document.getElementById("ans4R").checked = false;
    document.getElementById(event.target.id).checked = true;
}

function startFunction()
{
    console.log("start the quiz");
}
