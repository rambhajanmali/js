// let jsonRes = 
// '{"fact":"Ginger tabby cats can have freckles around their mouths and on their eyelids!","length":77}'
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);


// let student = {
//     name: "ram",
// //     marks: "98",

// // };

 //api callng

// let url = "https://catfact.ninja/fact";

// fetch(url)

//     .then((res) => {
//         return res.json()

//     })
//     .then((data) => {
//         console.log("data1 :",data.fact);
//        return fetch(url);
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log("data2: ",data.fact)
//     })
//     .catch((err) => {
//         console.log("error was =", err);
//     })


    //using async and await

    let url = "https://catfact.ninja/fact";

    
        async function getFact (){
            try{
            let res1 = await fetch(url);
            let data1 = await res1.json();
            console.log("data1 -", data1.fact);

            let res2 = await fetch(url);
            let data2 = await res2.json();
            console.log("data2 -", data2.fact);

        }catch (e) {
            console.log("error", e);
    
        }
    }
  