function printFun(dataIn)
{
    // this function will be printing special parts of the page you are displaying
    // 1. first take backup
    // 2. select the required Division or Element
    // 3. Assign document.body the required Element
    // 4. after print command assign the document.body the bkp to restore page
    var bkp = document.body.innerHTML;
    var divcontent  = document.getElementById(dataIn).innerHTML;    
    document.body.innerHTML = divcontent;
    window.print();
    document.body.innerHTML = bkp;

}

function printWholePage()
{
    window.print();
}