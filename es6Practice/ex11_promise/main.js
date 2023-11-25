// // callback hell in javascript
// // nested asyncronous callbacks in javascript

// // 1. get student roll no in 2s
// // 2. get name and ages in 2s
// // 3. get every student gender

// const getRollNo = ()=>
// {
//     setTimeout(() => {
//         console.log('API is fetching roll nos');
//         let roll_no = [1,2,3,4,5];
//         console.log(roll_no);

//         setTimeout((rn) => {
//             console.log(`RN is present ${rn}`);
//             const biodata = {
//                 name:'ahsan',
//                 age :26,
//                 gender: 'male'
//             }
//             console.log(`My name is ${biodata.name} and I am ${biodata.age} year old`);

//             setTimeout((data) => {
//                 console.log(` I am alpha ${data.gender}`);
//             }, 2000,biodata);

//         }, 2000,roll_no[1]); // get 2 roll no age and name        
//     }, 2000);
// }

// getRollNo();

// Promise has 3 stages
// 1. pending
// 2. resolve => in case promise is fulfilled
// 2. rejected

// promise as constructor
// constructor requires two arguments resolve and reject functions
// const pro1 = new Promise((resolveFunction, rejectFunction) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4, 5];
//         resolveFunction(roll_no);
//         rejectFunction('Error/Timeout');
//     }, 2000);
// }
// );
// // promise consumption
// pro1.then( (rollno) => { // if successful
//     console.log(rollno);
// } ).catch((errorMsg)=>
// {
//     console.log(errorMsg);
// });

// promise as object

// const pro1 = new Promise((resolveFunction, rejectFunction) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4, 5];
//         resolveFunction(roll_no);
//         rejectFunction('Error/Timeout');
//     }, 2000);
// }
// );

// const getBiodata = (indexData)=>
// {
//     return new Promise((resolveFunction,rejectFunction)=>
//     {
//         setTimeout((indexData) => {
//             let biodata = {
//                 name:'ahsan',
//                 age :26,
//                 gender:'male'
//             }
//             resolveFunction(`My roll number is ${indexData}. my name is ${biodata.name} and I am ${biodata.age} years old.`);
//         }, 2000, indexData);
//     });
// }

// promise consumption
// pro1
// .then( (rollno) => { // if successful
//     console.log(rollno);
//     return getBiodata(rollno[1])
// })
// .then((data)=> // this is promise resolve of getbiodata
// {
//     console.log(data);
// })
// .catch((errorMsg)=>
// {
//     console.log(errorMsg);
// });

// async await is used to simplify Promise consumption

const pro1 = new Promise((resolveFunction, rejectFunction) => {
        setTimeout(() => {
            let roll_no = [1, 2, 3, 4, 5];
            resolveFunction(roll_no);
            rejectFunction('Error/Timeout');
        }, 2000);
    }
    );
    
    const getBiodata = (indexData)=>
    {
        return new Promise((resolveFunction,rejectFunction)=>
        {
            setTimeout((indexData) => {
                let biodata = {
                    name:'ahsan',
                    age :26,
                    gender:'male'
                }
                resolveFunction(`My roll number is ${indexData}. my name is ${biodata.name} and I am ${biodata.age} years old.`);
            }, 2000, indexData);
        });
    }
    
    // promise consumption
    // pro1
    // .then( (rollno) => { // if successful
    //     console.log(rollno);
    //     return getBiodata(rollno[1])
    // })
    // .then((data)=> // this is promise resolve of getbiodata
    // {
    //     console.log(data);
    // })
    // .catch((errorMsg)=>
    // {
    //     console.log(errorMsg);
    // });
    
    // async await will only simplify promise consumption

    async function getData()
    {
        // async key words make function wait for promise to return
        // you cannot return any value from async function
        const rollnodata = await pro1;
        console.log(rollnodata);        

        const biodata = await getBiodata(rollnodata[1]);
        console.log(biodata);

        return biodata; 
    }

    getData();


    const getname = getData().then((myname)=>
    {
        console.log(myname);
    });
    //console.log(getname);