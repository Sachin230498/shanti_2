// for loop


// syntex
// for(initlize, condition ,iteration){ code }



// for(let i =1; i<=5;i++){
//     console.log(i)
// }




// for(let i = 1;i<=20;i++){

//     if(i%2==0){
//        console.log(i) 
//     }else{
//         console.log("odd no", i)
//     }
// }



// for(let i =1;i<=10;i++){
//     console.log(i*2)
// }


// let bag = "";
// for(let i =1;i<=5;i++){
//     // console.log(i)
//     bag = bag+i+" ";


// }

//   console.log(bag);



// //i=1 , bag = ""+1+" "  ,    bag = "1 "
// //i=2 , bag = "1 "+ 2+ " " , bag = "1 2 "
// //i=3 , bag = "1 2 "+ 3 + " ", bag = "1 2 3 "







    // 1 2 3 4 5


// let a = 5;
// let b = "7"

// console.log(typeof (a+b))  //  "57"


// let bag = "";

// for(let i = 5; i>=1;i--){
//     bag = bag + i + "*"
 
// }

//    console.log(bag);


let sum = 0;
let osum = 0;
let ecount = 0;
let ocount = 0;
for(let i=1;i<=20;i++){

    if(i%2==0){
       ecount++ 
    sum = sum+i
    }else{
        ocount++
    osum = osum+i
    }
}


console.log(ecount)

    console.log("even sum",sum/ecount);
    console.log("odd sum", osum/ocount)







// 25 +20+ 32+ 55+ 26
//