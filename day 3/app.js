//fav movie game

// const favMovie = "Avatar";

// let guess = prompt("guess my favorite movie");

// while( (guess != favMovie)  ){

//     if(guess == "quit"){
//         console.log("you quit")
//         break;
//     }
//    guess =  prompt("wrong guess please try again ");
// }

// if(guess == favMovie){
//     console.log("congrates!!");
// }
// else{
//     console.log("quit game");
// }


// let i= 1;
// while(i<=5){

//     if(i== 3){
//         break;
     
//     }
//     console.log(i);
//     i++;
// }


// let fruits = ["mango",  "orange", "litchi", "apple", "guavava"];

// fruits.push("banana");

// for(i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

//backward


//nested loop with nested arrays


// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman ", "flash"]
// ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i]);
//     for(j=0; j<heroes[i].length; j++){
//         console.log(`j=${j},  ${heroes[i][j]}`);
//     }
// }


// let student = [ ["aman" ,95], ["priya", 58],["suman", 69] ];
// for(i=0; i<student.length; i++){

//     console.log(i, student[i]);

//     for(let j=0; j<student[i].length;  j++){

//         console.log(`j=${j}, ${student[i][j]}`);
//     }
// }


//* for of loop

// let fruits = ["banana", "apple", "mango", "orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

//* nested for of loop


 let heroes = [
     ["ironman", "spiderman", "thor"],
     ["superman", "wonder woman ", "flash"]
];

for(list of heroes){
   
    for(name of list){
        console.log(name);
    }
}
