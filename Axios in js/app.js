// let btn = document.querySelector("button");

// btn.addEventListener("click ", async() =>{

//     let fact =  await getFact();
//     // console.log(fact);


//     let result = document.querySelector("#result")
//      result.innerText = fact ;
// });



// let url = "https://catfact.ninja/fact";

// async function getFact (){
//     try{
//     let res = await axios.get(url);
   
//     console.log(res.data.fact);

// }catch (e) {
//     console.log("error", e);
//     return "fact not found"

// }
// }


let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () =>{

        let link = await getImage();
        console.log(link);
    
        let image = document.querySelector("#result");
        image.setAttribute("src", link)
    
    });
    



async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error - ", e);
        console.log("no Image found")
    }
    
}


//sending headers

const url = "https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        const config ={ headers: {Accept: "application/json"}};
        let res = await axios.get(url ,config);
        console.log(res.data);
    }catch (e) {
        console.log("error ",e )
    }
}
