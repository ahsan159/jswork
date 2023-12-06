var expr = "";

var num1 = "";
var num2 = "";
var oper = "";
var ans = "";

function expressionOper(bIn)
{
    console.log(bIn);
    if (num1=="")
    {
        num1 = expr;
        oper = bIn;
        expr = "";
    }
    else if (num1!="")
    {
        num2 = expr;
        expr = num1+oper+num2;        
        console.log(expr);
        document.getElementById("disp").innerText = eval(expr);
        num1 = eval(expr);
        oper = bIn;
        expr = "";
    }
}

function expression(bIn) {
    expr = expr + bIn;
    console.log(expr);
}

function evaluateExp() {    
    console.log(expr);
    if (num1!="") {
        expr = num1 + oper + expr;
        console.log(expr);
        document.getElementById("disp").innerText = eval(expr);
        ans = eval(expr);
        expr = ans;
        num1 = "";
        num2 = "";
        oper = "";
    }
}