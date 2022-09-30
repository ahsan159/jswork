let searchItem = document.getElementById("searchBook");
let searchBtn = document.getElementById("searchBtn");

let urlEditor = [];
let urlNew = 'https://api.itbook.store/1.0/new';
urlEditor[1] = 'https://api.itbook.store/1.0/search/matlab';
urlEditor[2] = 'https://api.itbook.store/1.0/search/health';
urlEditor[3] = 'https://api.itbook.store/1.0/search/economy';
let allNewBooks = [];
let dI = [];
let dP = [];
let dT = [];
let books = [];

let EI = [];
let EP = [];
let ET = [];
let booksEditor = [];

fetchURLS(urlEditor[1], 1);
fetchURLS(urlEditor[2], 2);
fetchURLS(urlEditor[3], 3);

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

function fetchURLS(url, index) {
    fetch(url)
        .then((reponse) => reponse.json())
        .then((jsonData) => {
            allNewBooks = jsonData;
            booksEditor[index] = allNewBooks.books[1];
            let pre = "editorPick";
            let preI = "Img";
            let preP = "Price";
            let preT = "Title";
            // for (let index = 1; index < 4; index++) {
            let txtImg = pre + preI + index.toString();
            EI[index] = document.getElementById(txtImg);
            console.log(EI[index]);
            EI[index].src = booksEditor[index].image;
            let txtP = pre + preP + index.toString();
            EP[index] = document.getElementById(txtP);
            EP[index].textContent = booksEditor[index].price;
            let txtT = pre + preT + index.toString();
            ET[index] = document.getElementById(txtT);
            ET[index].textContent = booksEditor[index].title;
            // }
        }
        );
}
