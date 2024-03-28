let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    console.log("code = ", event.code);//arrowup , arrowdown, arrowright, arrowleft
    if (event.code == "ArrowRight") {
        console.log("character moves forward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves backward");
    } else if (event.code == "ArrowUp") {
        console.log("character moves up");
    } else if (event.code == "ArrowDown"){
        console.log("character moves down");
    }

});

// input.addEventListener("keyup", function(){
//     console.log('ket was pressed');
// });


