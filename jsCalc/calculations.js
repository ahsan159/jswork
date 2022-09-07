let voltBtn = document.getElementById("convertVolts");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
voltBtn.addEventListener("click",convertVolts);

function convertVolts() {
    if (val1.value == "" && val2.value == "") {
        alert("You cannot leave not inputs blank");
        return;
    }
    else if (val1.value == "") {
        val1.value = val2.value;
    } else {
        val2.value = val1.value;
    }
}