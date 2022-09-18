let btn = document.getElementById("submitt");
let cityh1 = document.getElementById("cityh1");
let temperatureh1 = document.getElementById("temph1");
let humidityh1 = document.getElementById("humth1");
let feelslike = document.getElementById("feelh1");
let apiStatus = document.getElementById("apiStatus");
let weatherImage = document.getElementById("wImage");
let percepitation = document.getElementById("perch1");
let windSpeed = document.getElementById("windh1");
let windDirection = document.getElementById("direh1");
weatherImage.src = "./sunny.jpg";

let imagf1 = document.getElementById("imagf1");
let tempf1 = document.getElementById("tempf1");
let humdf1 = document.getElementById("humdf1");
let precf1 = document.getElementById("precf1");

let imagf2 = document.getElementById("imagf2");
let tempf2 = document.getElementById("tempf2");
let humdf2 = document.getElementById("humdf2");
let precf2 = document.getElementById("precf2");

let imagf3 = document.getElementById("imagf3");
let tempf3 = document.getElementById("tempf3");
let humdf3 = document.getElementById("humdf3");
let precf3 = document.getElementById("precf3");
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
                let now = new Date;
                cityh1.textContent = m.location.name;
                temperatureh1.textContent = m.current.temperature + "°C";
                humidityh1.textContent = m.current.humidity + "%";
                feelslike.textContent = "Feels like " + m.current.feelslike + "°C";
                apiStatus.textContent = "Last updated on: " + now.getDate() + " " + now.getMonth() + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                percepitation.textContent = "Percepitation " + m.current.precip + "%";
                windSpeed.textContent = m.current.wind_speed + "km/h";
                windDirection.textContent = m.current.wind_dir;
            }
            catch (e) {
                console.log(m.error.info);
                apiStatus.textContent = "Cannot retrieve data now!!!";
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

let resp = funcRequest(url);
