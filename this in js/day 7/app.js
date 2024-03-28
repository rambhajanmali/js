
// const student = {
//     name: "ram",
//     age: "20",
//     eng: "58",
//     math: "89",
//     phy: "98",

//     getAvg(){

//         console.log(this);
//         let avg = (this.eng+this.phy+ this.math)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);

//     }
// };


//array functions

const sum = (a, b) => {
    console.log(a + b);
}


const cube = (n) => {
    return n * n * n;
};

const mul = (a, b) => a * b;

//set timeout

console.log("hi there");

setTimeout(() => {
    console.log("apna collage")
}, 4000);

console.log("welcome to");

//set interval

// let id = setInterval(() => {
//     console.log("apna collage")
// },2000);

// console.log(id);


// let id2 = setInterval(() => {
//     console.log("welcome to")
// },3000);

// console.log(id2);

//this with arrow function

const student = {
    name: "ram",
    marks: 98,
    prop: this, //global scope

    getName: function () {
        console.log(this);

        return this.name;
    },

    getMarks: () => {
        console.log(this); //parent's scope

        return this.marks;
    },

    getInfo1: function(){
        setTimeout(() => {
            console.log(this);//student
        } ,2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this); //window
        } ,2000);
    },    
};