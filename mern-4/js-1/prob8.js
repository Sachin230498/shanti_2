// nested loop

// for(let i = 1;i<=5;i++){
//     console.log("i is", i)
//     for (let j = 1; j <= 5; j++) {
//          console.log("j is ", j)
//     }
// }

// i = 1
//  i is 1
//  j =1
// j is 1
// j is 2
// j is 3
// j is 4
// j is 5

//Day 2: Ajay went to eat gol gappas with his family, he has 4 family members

// for( let family_member= 1;family_member<=4;family_member++){
//     console.log("family_member is", family_member)

//     for(let gol_gappe=1;gol_gappe<=5;gol_gappe++){
//         console.log("gol_gappe of " ,gol_gappe)
//     }
// }

// Example2: There is a father and son duo, they owns 5 farms, Father asked the son to plant 10 seeds in each farm.

//seb problem 2: Plnat the sedds in 5 farms

// for( let farm= 1;farm<=4;farm++){
//     console.log("farm no", farm)

//     for(let seeds=1;seeds<=10;seeds++){
//         console.log("seeds no " ,"*")
//     }
// }

// Father is basically asking his son to plant 5 seeds in 5 farm but in horizontal fashion.
//sub problem 2: Doing the planting operation for 5 farms

// for (let farm = 1; farm <= 5; farm++) {
//   console.log("farm no", farm);
//  let bag = "";
//   for (let seeds = 1; seeds <= 5; seeds++) {
//     bag = bag + "*" + " ";
//   }

//   console.log(bag);
// }

// Father is asking his son to plant seeds, with the following commands
// 1 ==> *
// 2 ==> **
// 3 ==> ***
// 4 ==> ****
// 5 ==> *****

// for (let farm = 1; farm <= 5; farm++) {
//   console.log("farm no", farm);
// //   let bag = "";
//   for (let seeds = 1; seeds <= farm; seeds++) {
//     // bag = bag + "*" + " ";
//     console.log("* ")
//   }

//   console.log("\n");
// }

// console.log("he\nllo" + "\n" + "abcd");



// for (let farm = 5; farm >= 1; farm--) {
 
//   let bag = "";
//   for (let seeds = 1; seeds <= farm; seeds++) {
//     bag = bag + seeds+ " ";
   
//   }

//   console.log(bag);
// }


// Print calender format dates and months


// let day=31;



// for (let i=1;i<=12;i++){
//   if(i==2){ 
//     day=28;
//   } else if(i==4||i==6||i==9||i==11){
//     day=30
//   } else {
//     day=31;
//   }
//   for (let j=1;j<=day;j++){
//     console.log("day is", j+ "-" + "month is",i);
//   }
// }