let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
try {
    let voltBtn = document.getElementById("convertVolts");
    voltBtn.addEventListener("click", convertVolts);
}
catch {

}

try {
    let healthBtn = document.getElementById("convertHealth");
    healthBtn.addEventListener("click", convertBMI);
}
catch { }


function convertVolts() {
    if (val1.value == "" && val2.value == "") {
        alert("You cannot leave not inputs blank");
        return;
    }
    else if (val1.value == "") {
        // val1.value = val2.value;
        let selectVal1 = document.getElementById("conversionVolt1")
        let selectVal2 = document.getElementById("conversionVolt2")
        let c2 = selectVal1.options[selectVal1.selectedIndex].text;
        let c1 = selectVal2.options[selectVal2.selectedIndex].text;
        console.log(c1);
        console.log(c2);
        let cT = document.getElementById("conversionText");
        let conversionFactor = 1;
        if (c1 == "micro-Volt(uV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 0.001;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 0.000001;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1E-9;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1E-12;
            }
        }
        else if (c1 == "milli-Volt(mV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1000;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 0.001;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1E-6;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1E-9;
            }

        }
        else if (c1 == "Volt(V)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1000000;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1000;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 1;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 0.001;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 0.000001;
            }

        }
        else if (c1 == "kilo-Volt(kV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1000000000;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1000000;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 1000;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1E-3;
            }

        }
        else if (c1 == "mega-Volt(MV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1E12;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1E9;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 1E6;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1E3;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1;
            }
        }
        cT.textContent = String(conversionFactor);
        val1.value = val2.value * conversionFactor;
    }
    else {
        let selectVal1 = document.getElementById("conversionVolt1")
        let selectVal2 = document.getElementById("conversionVolt2")
        let c1 = selectVal1.options[selectVal1.selectedIndex].text;
        let c2 = selectVal2.options[selectVal2.selectedIndex].text;
        console.log(c1);
        console.log(c2);
        let cT = document.getElementById("conversionText");
        let conversionFactor = 1;
        if (c1 == "micro-Volt(uV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 0.001;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 0.000001;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1E-9;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1E-12;
            }
        }
        else if (c1 == "milli-Volt(mV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1000;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 0.001;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1E-6;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1E-9;
            }

        }
        else if (c1 == "Volt(V)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1000000;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1000;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 1;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 0.001;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 0.000001;
            }

        }
        else if (c1 == "kilo-Volt(kV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1000000000;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1000000;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 1000;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1E-3;
            }

        }
        else if (c1 == "mega-Volt(MV)") {
            if (c2 == "micro-Volt(uV)") {
                conversionFactor = 1E12;
            }
            else if (c2 == "milli-Volt(mV)") {
                conversionFactor = 1E9;
            }
            else if (c2 == "Volt(V)") {
                conversionFactor = 1E6;
            }
            else if (c2 == "kilo-Volt(kV)") {
                conversionFactor = 1E3;
            }
            else if (c2 == "mega-Volt(MV)") {
                conversionFactor = 1;
            }
        }
        cT.textContent = conversionFactor.toString();
        val2.value = val1.value * conversionFactor;

    }
}

function convertBMI() {
    let weightUnitOpt = document.getElementById("weightDropdown");
    let weightUnit = weightUnitOpt.options[weightUnitOpt.value].text;
    let heightUnitOpt = document.getElementById("heightDropdown");
    let heightUnit = heightUnitOpt.options[heightUnitOpt.value].text;
    let weightText = document.getElementById("weight");
    let heightText = document.getElementById("height");
    let weight = weightText.value;
    let height = heightText.value;
    // console.log(weightUnit);
    // console.log(heightUnit);
    if (weightUnit == "Kg") {
        weight = weight * 1;
    } else if (weightUnit == "Lbs") {
        weight = weight / 2.2;
    } else if (weightUnit == "Stone") {
        weight = weight / 6.3;
    }

    if (heightUnit == "cm") {
        height = height / 100;
    } else if (heightUnit == "in") {
        height = height * 2.54 / 100;
    } else if (heightUnit == "m") {
        height = height * 1;
    }
    // console.log(weight);    
    // console.log(height);
    let BMI = weight / Math.pow(height, 2);
    let bmi = document.getElementById("bmidisp");
    let bmiAdvice = document.getElementById("bmiadvice");
    bmi.textContent = "Your BMI is " + BMI.toFixed(2);
    if (BMI <= 18.5) {
        bmi.style = "color: aqua";
        bmiAdvice.textContent = "You are underweight."
    }
    else if (BMI > 18.5 && BMI <= 24.5) {
        bmi.style = "color: green";
        bmiAdvice.textContent = "You are in good health.";
    }
    else if (BMI > 24.5 && BMI <= 29.5) {
        bmi.style = "color: orange";
        bmiAdvice.textContent = "You need to lose weight."
    }
    else if (BMI > 29.5) {
        bmi.style = "color: red";
        bmiAdvice.textContent = "You need specialist to lose weight."
    }
}