
//forEach method

// let arr = [1,2,3,4,5];

// let print = function print(el){
//     console.log(el);
// };

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el)
// });

// arr.forEach( (el) =>{
//     console.log(el)
// });


// let arr = [
//     {
// name: "rambhajan",
// marks: 98
// }, 
// {
//     name: "ram",
//     marks:54.2,
// },
//  {
//     name: "prince",
//     marks:96,
//  },
// ];



// arr.forEach( (student) => {
//     console.log(student.marks)
// });

// //map

// let gpa = arr.map((el) =>{
//     return el.marks/10;
// })

// let num = [1, 2, 3, 4];

// let double = num.map( (el) => {
//     return el * 2;
// });

//filter

// let nums = [1,2,5,3,7,90,54,67];

// let ans = nums.filter((el) => {
//     return el % 2 == 0; // even -> true  odd-> false
// });

//reduce

// let nums = [1,2,3,4];

// let finalValue = nums.reduce((res, el) => (res + el));
// console.log(finalValue);


//finding max in an array using reduce

let arr = [1,2,4,,7,8,9,11, 15];

// let max = -1;

// for(i= 1; i<arr.length; i++){

//     if(max<arr[i]){
//         max = arr[i];
    
//     }
   
// }
// console.log(max);

let max = arr.reduce((max, el) =>{
    if(max<el){
        return el;
    }else{
        return max;
    }

});

console.log(max)

//checkindg multiple of 10 or not in in array

let nums = [10,20,30,40];

let ans = nums.every( (el) => el % 10 == 0);
console.log(ans);


//finding min an an array

// let min = nums.reduce( (min,el) => {

//     if(min<el){
//         return min;
//     }else{
//         return el;
//     }
// });

// console.log(min);

//OR

function getMin(nums){

    let min = nums.reduce( (min,el) => {

        if(min<el){
            return min;
        }else{
            return el;
        }
    });

    return min;
}