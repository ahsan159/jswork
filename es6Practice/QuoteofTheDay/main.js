
window.onload = () => 
{
    getQuote();
}

function getQuote() {
    // console.log("I am called");
    const fetchQuote = fetch("https://api.quotable.io/Random");
    fetchQuote.then(response => {
        return response.json();
    }).then(quote => {
        // console.log(quote.content);
        document.getElementById("quote").innerText = `\"${quote.content}\"`;
    }).catch()
    {
        setTimeout(() => {
            document.getElementById("quote").innerText = "Loading";        
        }, 5);
    };
}