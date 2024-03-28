//lexical scope in js

function outerFunc(){

    let x = 5;
    let y = 6;

    function innerFunc(){
        console.log(x);
        console.log(y);

    }

    innerFunc();
}



//what will be the output of the bellow code

// let greet = "hello";// global scope

// function changeGreet(){

//     let greet = "nameste";  //function scope
//     console.log(greet);

//     function innerGreet(){
         
//        console.log(greet);  //lexical scope
//     }

// }

// console.log(greet);
// changeGreet();


//function expression

let name = "ram";

let sum = function(a, b){
    return a+b;
}


//higher order function

function multipleGreet(func, count){
    for(i= 1; i<count; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet,3);


function oddOrEvenFactory(request){

    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request == "even"){

        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }

    else{
        console.log("wrong number");
    }
}

let request = "odd";//even


//methods

// let calcutor = {
//     num: 55,

//     add: function(a, b){
//         return a+b;
//     },

//     sub: function(a, b){
//         return a-b;
//     },
//     mul: function(a, b){
//         return a*b;
//     }

// };


//methods shorthand

let calcutor = {
    num: 55,

    add(a, b){
        return a+b;
    },

    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    }

};


