let dataSaved = null;
let cityDropDown = document.getElementById("citiesAll")
fetch('./capitals.json')
    .then((response) => response.json())
    .then((jsonData) => {
        dataSaved = jsonData;
        let dStr = null;
        for (let i = 0; i < dataSaved.length; i++) {
            let v = i.toString();
            let c = dataSaved[i].name;
            dStr = dStr + `
            <option value="${v}">${dataSaved[i].city}</option>
            `;
            // console.log(dataSaved[i].name);
        }
        cityDropDown.innerHTML = dStr;
    });