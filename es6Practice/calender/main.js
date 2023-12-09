var d = new Date();
var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
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
    var tableID = document.getElementById("ctable");
    let td = " ";
    let tr = `            <tr>
                            <th style="color:red">S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>`;
    for(let i = 0,j=0,k=0; i < dayCount[d.getMonth()];j++)
    {        
        if (d.getDay() == j)
        {
            k++;
        }
        if (j%7==0)
        {
            td=td+"<tr>";
        }
        

        if(k!=0)
        {

            td = td + "<td class=\"dateText\" onclick=\"console.log('me')\">" + (i+1) + "</td>";
            i = i+1;
        }
        else
        {
            td = td + "<td class=\"dateText\" onclick=\"console.log('me')\">" +"</td>"
        }
        if (j%7==6)
        {
            td=td + "</tr>";
            j = -1;
        }
        // console.log(i);
    }
    // console.log(td);
    tableID.innerHTML = tr + td;
}