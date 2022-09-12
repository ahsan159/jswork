let btn = document.getElementById("submitt");
// btn.addEventListener("click", callurl);


let url = "http://api.weatherstack.com/current?access_key=4a89e072d9e3836e7989f2b15332e7c5&query=New%20York";

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
        })
        .catch(function (error) {
            console.log(error);
        });
}

let resp = funcRequest(url);
