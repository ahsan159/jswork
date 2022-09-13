let btn = document.getElementById("submitt");
let cityh1 = document.getElementById("cityh1");
let temperatureh1 = document.getElementById("temph1");
let humidityh1 = document.getElementById("humth1");
let feelslike = document.getElementById("feelh1");
let apiStatus = document.getElementById("apiStatus");
let weatherImage = document.getElementById("wImage");
weatherImage.src = "./sunny.jpg";
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
                feelslike.textContent = m.current.feelslike + "°C";
                apiStatus.textContent = "Last updated on: " + now.getDate() + " " + now.getMonth() + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
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
