// javascript alert, prompt and confirmation boxes

console.log('starting');

function promptName()
{
    // document.write("ahsanasdfasdf");
    console.log('ahsan');
    var name = prompt("What is your name");
    if (name!=null)
    {
        // var nameDisp = document.getElementById("displayclass");
        document.getElementById("displayclass").innerHTML = "nice to meet you " + name;
    }

}
