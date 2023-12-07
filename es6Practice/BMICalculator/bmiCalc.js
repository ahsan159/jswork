function calcBMI()
{
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    h = h/100;
    console.log(h)
    console.log(w);
    var bmi = w/h/h;
    document.getElementById("BMI").value = Math.round(bmi);
}