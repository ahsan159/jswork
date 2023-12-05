var expr = "";

function expression(bIn)
{
    expr = expr + bIn;
    console.log(expr);
}

function evaluateExp()
{
    console.log(expr);
    document.getElementById("disp").innerText = eval(expr);
    expr = "";
}