// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i < smallImages.length; i++){
//     console.dir(smallImages[i]);
// }


// console.dir(document.querySelector('h1'));

// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector('.oldImg'));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");
// for(i=0; i<links.length; i++){
//     links[i].style.color = "green";
// }

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = ("click me");
document.querySelector("body").append(button);
document.querySelector("body").append(input);


//practice question 

let para1 = document.createElement("p");
para1.innerText = "hey i'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");


let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");

h1.innerText = "I'm in a div";
para2.innerText = "Me Too!";
div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").append(div);