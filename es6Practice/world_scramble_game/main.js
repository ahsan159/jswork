// const msg = document.querySelector('.msg');
// const guess = document.querySelector('input');
// const btn = document.getElementById('btnid');

let msg;
let guess;
let btn;
let play = false;
let selectword = "";
let scrambledword = "";
let sWords = ['javascript', 'php', 'html', 'c++', 'c#', 'css', 'react'];

const createWords = () => {
    let rndm = Math.random()*sWords.length;
    // // i need floor function but thappa does not require it
    //  console.log(Math.floor(rndm)); 
    //  console.log(sWords[Math.floor(rndm)]);     
    let newword = sWords[Math.floor(rndm)];
    // console.log(newword);
    return newword;
}

const scrambleWordFunction = (input) => 
{
    console.log(input);
    let output = [];
    for (let i = input.length-1; i > 0;i--)
    {
        let temp = input[i]
        let rndm = Math.floor(Math.random()*(i+1));
        // console.log(input[i]);

    }
}

window.onload = function () {

    msg = document.querySelector('.msg');
    guess = document.querySelector('input');
    btn = document.getElementById('btnid');
    btn.addEventListener('click', function () {
        if (!play) {
            // play = true;
            btn.innerHTML = 'Guess';
            guess.classList.toggle('hidden');
            selectword = createWords();
            scrambledword = scrambleWordFunction(selectword.split(""));
            // console.log(createWords())
        }
    }
    )
}

