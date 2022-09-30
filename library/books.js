let searchItem = document.getElementById("searchBook");
let searchBtn = document.getElementById("searchBtn");

let urlNew = 'https://api.itbook.store/1.0/new';
let allNewBooks = [];
let dI = [];
let dP = [];
let dT = [];
let books = [];
fetch(urlNew)
    .then((reponse) => reponse.json())
    .then((jsonData) => {
        allNewBooks = jsonData;
        books[1] = allNewBooks.books[1];
        books[2] = allNewBooks.books[2];
        books[3] = allNewBooks.books[3];
        let pre = "newArrival";
        let preI = "Img";
        let preP = "Price";
        let preT = "Title";

        for (let index = 1; index < 4; index++) {
            let txtImg = pre + preI + index.toString();
            dI[index] = document.getElementById(txtImg);
            console.log(dI[index]);
            dI[index].src = books[index].image;
            let txtP = pre + preP + index.toString();
            dP[index] = document.getElementById(txtP);
            dP[index].textContent = books[index].price;
            let txtT = pre + preT + index.toString();
            dT[index] = document.getElementById(txtT);
            dT[index].textContent = books[index].title;
        }
    }
    );

