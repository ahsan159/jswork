window.onload = ()=>
{
    var d = new Date();
    document.getElementById("Time").innerText=d.toLocaleTimeString();
    document.getElementById("Date").innerHTML=d.toLocaleDateString();
}

function fStart()
{
    clock = setInterval(clockTiming, 1000);
}

function fStop()
{
    clearInterval(clock);
}

var clock = setInterval(clockTiming,1000);
function clockTiming()
{
    var d = new Date();
    document.getElementById("Time").innerText=d.toLocaleTimeString();    
}