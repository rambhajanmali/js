//default perameters

// function sum(a, b = 3){
//     return a + b;
    
// }

// sum(5);

//spread

// let arr = [1,2,3,4,5];

// newArr= [...arr];

// let chars = [..."hello"];

// let odd = [1,3,5,7];
// let even = [2,4,6,8];

// let nums = [...odd, ...even];

const data = {
    email: "ramali9352@gmail.com",
    passward: "abcd",
};

const dataCopy = {...data , id: 123};

let arr = [1,2,3,4,5];//value
let obj1 = {...arr};//obj->key:val

let obj2 = {..."hello"};

//rest

// function sum(...arg){     //arguments

//     for( let i=0; i<arg.length; i++ ){
//         console.log( "you gave us", arg);
//     }
// }

// function min(){
//     console.log(arguments);
// }

function sum(...args){
    return args.reduce((sum, el) => sum + el);

}

function min(...args){
    return args.reduce((min, el) => {
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
}

//destructuring

let names = ["tony", "peter", "bruce", "steve"];

let [winner , runnerup , ...others] = names;


//destructuring for objects

const student = {
    name: "karan",
    class: 4,
    age: 6,
    username: "karan@gmail.com",
    passward: "abcd"
};

let {username: user , age } = student;