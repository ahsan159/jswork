window.onload = () =>
{
    // dom work
    console.log('data');
    var child = document.body.children;
    console.log(child);

    // append node to document body

    var para = document.createElement("p");
    var textnode = document.createTextNode("This is new para.");
    para.appendChild(textnode);
    console.log(para);
    document.body.appendChild(para);

    var list = document.querySelector("ul");
    console.log(list);
    console.log(list.childNodes[3].textContent);

    // location
    // document.write(window.location.href);
    // document.write("\n")
    // document.write(window.location.hostname);    
}

function myfun () {
    window.location.assign("http://127.0.0.1:5500/");
}