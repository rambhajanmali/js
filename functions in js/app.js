function hello(){
    console.log("hello");
}



function print1to5(){
    for(i=1; i<5; i++){
        console.log(i);
    }
}


function isAdult(){

    let age = 83;
    if(age>=18){
        console.log("adult");

    }
    else{
        console.log("not adult");
    }
}


function printPoem(){
    console.log("twincle twincle litle star");
    console.log("how are wonder what you are");
}

//rolling dice

function rollDice(){


let rand = Math.floor(Math.random()*6)+1;
console.log(rand);
}

// rollDice();
// rollDice();
// rollDice();
// rollDice();


// printPoem();

// isAdult();

//print1to5();


// hello();

//functions in arguments

function printInfo(name ,age){
console.log(`${name}, ${age}`);

}

printInfo("ram" , 20);

function calcAvg(a, b, c){
    console.log((a+b+c)/3);
}

// calcAvg(14,12,12);


function printTable(n){
    for(i=n; i<=n*10; i +=n){
        console.log(i);
    }
}

// printTable(2);

// function sum(a, b){
//     return a+b;
// }

 
// console.log(sum(4, 7));


function isAdult(age){
    if(age>= 18){
        return "adult";
    }
    else{
        return "not adult";
    }

    console.log("bye, bye");
}
 

//sum of n numbers from 1 to n
function getSum(n){

     let sum = 0;

     for(i=1; i<=n; i++){
        sum += i;
     }

     return sum;

}


// let str = ["hi", "hello", "bye", "!"];
// function concate(str){

//     let result = "";

//     for(i=0; i<=str.length; i++){
//         result +=str[i];

//     }

//     return result;
// }


//function scope

let sum = 54;    //global scope

function calSum(a, b){

    let sum = a+b;     //function scope
    console.log(sum);
}

calSum(sum);

console.log(sum);