// let btn = document.querySelector("button");
// console.dir(btn)

// btn.onclick = function () {
//     alert("button was clicked")
// };


// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("you enter a button");
//     }
// }

// function sayHello() {
// alert("hi")
// };

//event listener


// let btns = document.querySelectorAll("button");

// for (btn of btns){

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function() {
//         console.log("double click tke button");
//     });
// }


// function sayHello() {
//      alert("hi")
//      };

// function sayName(){
//     alert("apna college");
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("paragraph");
// });

// let box = document.querySelector("div");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// })

//this in event listeners

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);
