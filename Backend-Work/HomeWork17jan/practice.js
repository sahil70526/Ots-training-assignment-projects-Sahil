// // // ---------- call method --------------------------

// // function user(x,y){
// //     console.log(this.name +'Working On '+this.work+" "+x+y);
// // }

// // const obj={
// //     name:'Sahil Singh',
// //     work:"Learning js"
// // }

// // user.call(obj);

// // // ------------- apply method ---------------------

// // user.apply(obj,[4,5]);


// // // ------------- practice map in js --------------------------

// // // ways of declaration ------------------
// // let map1= new Map(
// //     [
// //        ["item1",1],
// //        ["item2",2], 
// //        ["item3",3], 
// //        ["item4",4],  
// //        ["item5",5], 
// //     ]
// // );

// // let map2= new Map();

// // map2.set("item6",6);
// // map2.set("item7",7);
// // map2.set("item8",8);
// // map2.set("item9",9);
// // map2.set("item10",10);


// // map2.delete('item6');


// // let text='';

// // for(const x of map2.entries()){
// //     console.log(text+=x);
// // }

// // map2.forEach((value,key)=>{
// //     console.log(text+=key,'====>',value);
// // })

// Question ---------------------------
// Prepbuddy is given a string str1 and another str2. Find the character in str2 which is present at the minimum index in str1.
// If no character of str2 is present in str1, then print no character present . Otherwise print the character as result.

// testCases----------
// 1.   str1:"prepbytes"
//      str2:"abc"
// output: b

// let str1= "otssolutions";
// let str2= "love";


// let str1 = "defaghsacb";
// let str2 = "db";

let str1= "prepbytes";
let str2="abc";

let obj = {};

for(let i = 0; i < str2.length; i++) {
    let char = str2[i];
    let index = str1.indexOf(char);
    if(index>=0){
        obj[char] = index;
    }
   
}
let arr= Object.keys(obj);
let letter='';
let min1=obj[arr[0]];
for (let index = 0; index < arr.length; index++) {
     min1 = Math.min(min1,obj[arr[index]]);
     if(obj[arr[index]]===min1){
        letter= arr[index]
    }
}

console.log(letter);