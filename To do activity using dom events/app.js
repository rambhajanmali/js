let button = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});


ul.addEventListener("click", function(event){
if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
}
})


