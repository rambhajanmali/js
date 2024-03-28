// function one(){
//     return 1;
// };

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// let a = 20;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);


//synchrous nature
// setTimeout(() =>{
//     console.log("rambhajan mali");
// }, 2000);
// setTimeout(() =>{
//     console.log("hello world");
// }, 2000);

// console.log("hello...");




//callback Hell in js 

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;

//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () =>{
//         changeColor("yellow",1000, () =>{
//             changeColor("green", 1000, () =>{   //callback nesting -> callback hall
//                 changeColor("blue",1000);
//             })
//         });
//     });
// });





// function savetoDb(data, success, failure) {

//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }

// }

// savetoDb(
//     "Apna college",
//     () => {
//         console.log(" success: your data was saved");

//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2, data saved");
//                 savetoDb("rambhajan mali",
//                     () => {
//                         console.log("success3 :data saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log(" failure2,     weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("weak connection. your data was not saved");
//     }
// );


//promises in js


// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success");
//         } else {
//             reject("failure");
//         }

//     });

// }

// savetoDb("apna college") // req = promise object
// .then((result) =>{
//     console.log("data 1 saved");
//     console.log("result of promise:", result);

//     return savetoDb("hello world")
// })
// .then((result) =>{
//     console.log("data 2 saved");
//     console.log("result of promise:", result);

//     return savetoDb("rambhajan");
// })
// .then((result) =>{
//     console.log("data 3 saved");
//     console.log("result of promise:", result);
// })

// .catch((error) =>{
//     console.log("promise was rejected");
//     console.log("error of promise:", error);
// });



// let h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{

//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     });
// }

// changeColor("red",1000)
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(() =>{
//     console.log("orange color was completed");
//     return changeColor("green",1000);
// })
// .then(() =>{
//     console.log("green color was completed");
//     return changeColor("yellow",1000);
// })
// .then(() =>{
//     console.log("yellow color was completed");
// });



//using await function

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{

            let num = Math.floor(Math.random() *5)+ 1;
            if(num>3){
                reject("promise reject");
            }

            h1.style.color = color;
            console.log(`color change to ${color}`);

            resolve("color changed");
        }, delay);
    });
}

async function demo(){
  await  changeColor("red",1000);
  await  changeColor("orange",1000);
  await  changeColor("green",1000);
    changeColor("blue",1000);

    let a = 5;
    console.log(a);
    console.log("new number =", a+3);
}

demo();

