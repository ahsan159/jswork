var d = new Date();
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
window.onload = () => {
    document.getElementById("monthText").innerText = monthNames[d.getMonth()];
    document.getElementById("yearText").innerText = d.getFullYear();
    updateCalender('print');
    document.getElementById("todayis").innerText = d.toLocaleDateString();
}

function printCalender() {
    var tableID = document.getElementById("ctable");
    let td = " ";
    // add the header
    let tr = `            <tr>
                            <th style="color:red" class=\"weekHeader\">S</th>
                            <th class=\"weekHeader\">M</th>
                            <th class=\"weekHeader\">T</th>
                            <th class=\"weekHeader\">W</th>
                            <th class=\"weekHeader\">T</th>
                            <th class=\"weekHeader\">F</th>
                            <th class=\"weekHeader\">S</th>
                        </tr>`;

    // save today 
    let dToday = new Date();
    dToday = dToday.toLocaleDateString();
    // console.log(dToday);
    // current print month 
    let cMonth = d.getMonth();
    // find the dayCount in month and correct for leap year                        
    let dDayCount = dayCount[d.getMonth()];
    if (d.getMonth() == 1 && d.getFullYear() % 4 == 0) {
        dDayCount++;
    }

    // find first Day of Month
    let dfirstDay = new Date(d);
    dfirstDay.setDate(1);
    // equalize for start of week
    dfirstDay.setDate(dfirstDay.getDate() - dfirstDay.getDay());

    // find last Day of Month
    let dlastDay = new Date(d);
    dlastDay.setDate(dDayCount);
    // equalize for end of week
    dlastDay.setDate(dlastDay.getDate() + 6 - dlastDay.getDay());

    // for(let i = 0,j=0,k=0; i < dDayCount;j++)
    for (let dn = dfirstDay, k = 1, j = 0; dn <= dlastDay; dn.setDate(dn.getDate() + 1), j++) {
        // start the new row with new week
        let id = dn.toLocaleDateString();
        if (j % 7 == 0) {
            td = td + "<tr>";
        }
        // add date in table
        if (dn.toLocaleDateString()==dToday)
        {
            // today display with different class
            td = td + `<td class="today" id="${id}" onclick="addTaskFunction(event)">  ${dn.getDate()}  </td>`;
        }
        else if (dn.getMonth() == cMonth) 
        {
            // current month
            td = td + `<td class="currentMonthText" id="${id}" onclick="addTaskFunction(event)">  ${dn.getDate()}  </td>`;
        }         
        else 
        {
            // remaining month to cover weeks
            td = td + `<td class="dateText" id="${id}" onclick="addTaskFunction(event)">  ${dn.getDate()}  </td>`;
        }
        // end the row with ending week
        if (j % 7 == 6) {
            td = td + "</tr>";
            j = -1;
        }
    }
    // console.log(td);
    tableID.innerHTML = tr + td;
}

function updateCalender(cmd) {
    if (cmd == 'bYear') {
        d.setFullYear(d.getFullYear() - 1);
        document.getElementById("yearText").innerText = d.getFullYear();
    }
    else if (cmd == 'fYear') {
        d.setFullYear(d.getFullYear() + 1);
        document.getElementById("yearText").innerText = d.getFullYear();
    }
    else if (cmd == 'bMonth') {
        d.setMonth(d.getMonth() - 1);
        document.getElementById("monthText").innerText = monthNames[d.getMonth()];
        document.getElementById("yearText").innerText = d.getFullYear();
    }
    else if (cmd == 'fMonth') {
        d.setMonth(d.getMonth() + 1);
        document.getElementById("monthText").innerText = monthNames[d.getMonth()];
        document.getElementById("yearText").innerText = d.getFullYear();
    }
    printCalender();
}

function addTaskFunction(e)
{
    // console.log("This is the function");
    // console.log(arguments.callee);    
    // console.log(e.target.id);    

    let inTask = prompt('Enter the task!!!');
    inTask = inTask==null?"Reminder":inTask;

    let dr = document.createElement("div");
    dr.setAttribute("class","row");

    let ds = document.createElement("div");
    ds.setAttribute("class","box tableentry");
    ds.innerText=document.getElementById("todotable").childElementCount-2;
    let dd = document.createElement("div");
    dd.setAttribute("class","box tableentry");
    dd.innerText=e.target.id;    
    let dt = document.createElement("div");
    dt.setAttribute("class","box tableentry");
    dt.innerText = inTask;

    dr.appendChild(ds);
    dr.appendChild(dd);
    dr.appendChild(dt);

    document.getElementById("todotable").appendChild(dr);
    // console.log(document.getElementById("todotable").innerHTML);

}