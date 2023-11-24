// default and rest parameters

// default parameters
// function argument b has default parameter of 0

const sum = (a,b=0) =>  a+b

console.log(sum(12,46));
console.log(sum(15));

// rest parameters

// using arrow function with curly brackets require return statement
const sumr = (...inputs) =>
{
    //function sumr(...inputs)
    console.log(inputs);
    console.log(...inputs);
    let total = 0;
    for (let i of inputs)
    {
        total = total + i;
    }
    console.log(total);    
    return total;
}

console.log(sumr(1,2,3,4,5,6,7,8,9)); 
//answer is 3;

function fun(a,b,...c)
{
    console.log(`${a},${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Messi'));
}

fun('Ronaldo','Neymar','Pele','Messi','Edan');