function calcBMI()
{
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    console.log(h)
    console.log(w);
    console.log(w/h/h);
    document.getElementById("BMI").value = w/h/h;
}