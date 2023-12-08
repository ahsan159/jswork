var d = new Date();
var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
window.onload = ()=>
{
    document.getElementById("monthText").innerText = monthNames[d.getMonth()];
    document.getElementById("yearText").innerText = d.getFullYear();
}

function updateCalender(cmd)
{
    if (cmd=='bYear')
    {   
        d.setFullYear(d.getFullYear()-1);
        document.getElementById("yearText").innerText = d.getFullYear();        
    }
    else if(cmd=='fYear')
    {
        d.setFullYear(d.getFullYear()+1);
        document.getElementById("yearText").innerText = d.getFullYear();        
    }
    else if (cmd=='bMonth')
    {
        d.setMonth(d.getMonth()-1);
        document.getElementById("monthText").innerText = monthNames[d.getMonth()];                
        document.getElementById("yearText").innerText = d.getFullYear();                
    }
    else if (cmd=='fMonth')
    {
        d.setMonth(d.getMonth()+1);
        document.getElementById("monthText").innerText = monthNames[d.getMonth()];                
        document.getElementById("yearText").innerText = d.getFullYear();  
    }
}