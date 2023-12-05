window.onload = () => {
    document.getElementById("evalh1").innerText = "Loaded";
}


function testEval()
{
    // eval result in string output
    
    var x = 10;
    var y = 20;
    var a = eval("x * y") + "<br>"
    var b = eval("2 + 2") + "<br>"
    var c = eval("x + 17") + "<br>"
    
    var res = a + b +c;
    console.log(res);
    
    console.log(eval('2+2')===eval('4'));
    document.getElementById("evalh1").innerHTML = res;
    
    
    
}

