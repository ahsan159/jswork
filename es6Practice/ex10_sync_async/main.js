const func2 = () => {
    setTimeout(() => {
        console.log('this is function2');
    }, 1000);
}


const func1 = () => {
    console.log('function 1 is starting');
    func2();
    console.log('function 1 is ending');
}

func1();

// callback hell in javascript
// nested asyncronous callbacks in javascript

// 1. get student roll no in 2s
// 2. get name and ages in 2s
// 3. get every student gender

const getRollNo = ()=>
{
    setTimeout(() => {
        console.log('API is fetching roll nos');
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((rn) => {
            console.log(`RN is present ${rn}`);
            const biodata = {
                name:'ahsan',
                age :26,
                gender: 'male'
            }
            console.log(`My name is ${biodata.name} and I am ${biodata.age} year old`);

            setTimeout((data) => {
                console.log(` I am alpha ${data.gender}`);
            }, 2000,biodata);

        }, 2000,roll_no[1]); // get 2 roll no age and name        
    }, 2000);
}

getRollNo();