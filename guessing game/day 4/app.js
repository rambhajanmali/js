const max = prompt("enter your max number");


const random = Math.floor(Math.random()*max) +1;

let guess = prompt("guess your number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you guess the right number , random number was",random);
        break;
    }

    else if(guess<random){
        guess = prompt("hint: you enter too small,please enter large number");
    }

    else{
      guess =  prompt("hint: you enter too large,please enter large number");
    }

  
}