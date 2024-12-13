// rest opertor  ... 

// function sum(a,b,c,...otherpara){
//     // console.log(a)
//     // console.log(b)
//     // console.log(c)

//     // console.log("other", otherpara)
// let total = 0;
//     for(let para of otherpara){
//         // console.log(para)
//         total = total + para
//     }
//     console.log(total)
// }

//  sum(10,20,55,78,98,22,66,45,79)



// spread opt ...

let arr1 = [1,2,30]
let arr2 = [78,5,6,4]

let arr3 = [...arr1,...arr2]

// console.log(arr3.sort())

arr3.sort(function(a,b){
    return b-a
})

console.log(arr3)
// let abc = [12,89,45, ...arr2]

// console.log(abc)