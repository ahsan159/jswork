// javascript alert, prompt and confirmation boxes

console.log('starting');

function promptName()
{
    // document.write("ahsanasdfasdf");
    // console.log('ahsan');
    var name = prompt("What is your name");
    if (name!=null)
    {
        // var nameDisp = document.getElementById("displayclass");
        document.getElementById("displayclass").innerHTML = "nice to meet you " + name;
    }

}

function confirmBox()
{
    var test = confirm("are you sure???");
    if (test)
    {
        document.getElementById("displayclass").innerHTML = "You clicked OK!!!";
        window.open("http://127.0.0.1:5500/");
        return true;
    }
    else
    {
        document.getElementById("displayclass").innerHTML = "You clicked Cancel!!!";
        return false;
    }
}