let btn = document.getElementById("submitt");
let cityh1 = document.getElementById("cityh1");
let temperatureh1 = document.getElementById("temph1");
// btn.addEventListener("click", callurl);


let url = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=Lahore";

let m;
async function funcRequest(url) {
    await fetch(url)
        .then((response) => {
            return response.json(); // data into json
        })
        .then((data) => {
            // Here we can use the response Data
            console.log(data);
            m = data;
            try {
            cityh1.textContent = m.location.name;
            temperatureh1.textContent = m.current.temperature;
            }
            catch (e) {
                console.log(m.error.info);
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

let resp = funcRequest(url);
