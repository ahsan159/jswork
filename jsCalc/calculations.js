let voltBtn = document.getElementById("convertVolts");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
voltBtn.addEventListener("click", convertVolts);


function convertVolts() {
    let selectVal1 = document.getElementById("conversionVolt1")
    let selectVal2 = document.getElementById("conversionVolt2")
    let c1 = selectVal1.options[selectVal1.selectedIndex].text;
    let c2 = selectVal2.options[selectVal2.selectedIndex].text;
    console.log(c1);
    console.log(c2);
    if (val1.value == "" && val2.value == "") {
        alert("You cannot leave not inputs blank");
        return;
    }
    else if (val1.value == "") {
        val1.value = val2.value;
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
        cT.value = String(conversionFactor);
        val1.value = val2.value * conversionFactor;
    }
    else {
        val2.value = val1.value;
    }
}