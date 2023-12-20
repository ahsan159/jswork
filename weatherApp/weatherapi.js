let searchBtn = document.getElementById("submitSearch");
let searchCity = document.getElementById("citySearch");
searchBtn.addEventListener("click", shiftCities);
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

let cityf1 = document.getElementById("cityf1")
let imagf1 = document.getElementById("imagf1");
let tempf1 = document.getElementById("tempf1");
let humdf1 = document.getElementById("humdf1");
let precf1 = document.getElementById("precf1");

let cityf2 = document.getElementById("cityf2")
let imagf2 = document.getElementById("imagf2");
let tempf2 = document.getElementById("tempf2");
let humdf2 = document.getElementById("humdf2");
let precf2 = document.getElementById("precf2");

let cityf3 = document.getElementById("cityf3")
let imagf3 = document.getElementById("imagf3");
let tempf3 = document.getElementById("tempf3");
let humdf3 = document.getElementById("humdf3");
let precf3 = document.getElementById("precf3");
// btn.addEventListener("click", callurl);

let city = "Lahore";
let city1 = "Karachi";
let city2 = "Islamabad";
let city3 = "London";

let url;
let url1;
let url2;
let url3;

url  = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city;
url1 = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city1;
url2 = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city2;
url3 = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city3;

let resp = funcRequest(url);
let resp1 = getOtherCities(url1, tempf1, humdf1, precf1, imagf1);
let resp2 = getOtherCities(url2, tempf2, humdf2, precf2, imagf2);
let resp3 = getOtherCities(url3, tempf3, humdf3, precf3, imagf3);

cityf1.textContent = city1;
cityf2.textContent = city2;
cityf3.textContent = city3;

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

async function getOtherCities(url, temp, hum, perc, imag) {
    await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            temp.textContent = data.current.temperature + "°C";
            hum.textContent = data.current.humidity + "%";
            perc.textContent = data.current.precip + "%";
            imag.src = "./smoke.jpg";
        });
}

function shiftCities() {
    // console.log("here");
    city3 = city2;
    city2 = city1;
    city1 = city;
    city = searchCity.value;

    // console.log(city);

    url = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city;
    url1 = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city1;
    url2 = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city2;
    url3 = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=" + city3;

    resp = funcRequest(url);
    resp1 = getOtherCities(url1, tempf1, humdf1, precf1, imagf1);
    resp2 = getOtherCities(url2, tempf2, humdf2, precf2, imagf2);
    resp3 = getOtherCities(url3, tempf3, humdf3, precf3, imagf3);

    cityh1.textContent = city;
    cityf1.textContent = city1;
    cityf2.textContent = city2;
    cityf3.textContent = city3;

    return false;
}