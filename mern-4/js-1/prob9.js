// Array   

// let arr = ["multiple type data"]  //syntex


// let arr= ["rahul", 123, true, "neha" , [ 4,5,6,8]  ]


// console.log(arr)


// how to access the inside data 
// using indexing   0 


// console.log(arr[3])



// how to get the length
// .length



// console.log(arr.length)


// console.log(arr[arr.length-1])


// methods

// push  pop shift unshift

// let arr = [1,2,3]

// arr.push(4,46,55,"asd")   //add from last

// console.log(arr)


// arr.pop()
// arr.pop()
// arr.pop()


// for(let i =1;i<=6;i++){
// arr.pop();
// }

// console.log(arr)


// unshift

// arr.unshift(4,8,9)

// console.log(arr)

// arr.shift()

// console.log(arr)





// let arr = [4,"abcd","maya", 88, 85,99]
// // console.log(arr[5])


// // arr[1] = "xyz";
// // arr[0] = 45 ;

// // arr[7] = 888


// // console.log(arr[6])






// let arr = [1, 2, 3, 9, 8,5 ,7 ];

// break 
// continue

// for(let i = 0;i<arr.length;i++){
//     // console.log(i)
//     // console.log(arr[i])
//     if(arr[i] == 8){
//         // break;
//         // continue;
//     }

//     console.log(arr[i])

// }




// let movies=["Bahubali","Avengers", "Pushpa", "KGF"];

// // Print all the movies except Avengers


// for(let i = 0;i<movies.length;i++){
//     // console.log(movies[i])
//     if(movies[i] == "Avengers"){
//         continue;
//     }

//     console.log(movies[i])
// }





// let products = ["Earphones","mobile", "buds", "nackbands", "xyz"];

// //print last 4 products

// let start = 0;




// if (products.length >= 2) {
//   start = products.length - 4;   
// }

// for (let i = start; i < products.length ; i++) {
//   console.log(products[i]);
// }



//PROBLEM 1
//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.
// 1 Aman
// 2 Ajay



let name=["Aman", "Ajay", "Varun", "Vijay"];


for(let i = 0;i<name.length;i++){
   console.log(i+1, name[i])
  
}

