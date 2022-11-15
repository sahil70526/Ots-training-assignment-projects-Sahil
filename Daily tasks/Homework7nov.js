let result1 = "";
let result2 = "";
let n = 10;

// ---------- home Work Q-1 --------------
for (let index = n; index >= 1; index--) {
    for (let i = 1; i <= index; i++) {
        result1 += i;

    }
    result1 += "\n"
}
console.log(result1);

// ---------- home Work Q-2 --------------

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        result2 += "*";
    }
    result2 += "\n"
}
console.log(result2);

// // -------by While loop  Ques 1 ----------------
// let w = 1;
// let x = 1;
// let y=1;
// let z=1;
// let m=10;
// let result3 = "";
// let result4="";
// while (n>=w) {
//     while (x <= n) {
//         result3 += x;
//         x += 1;
       
//     }
//     x=1;
//     result3 += "\n"
//     n -= 1;
// }
// console.log(result3);

// // -------by While loop  Ques 2 ----------------

// while (y<=m) {
//     while (z <= y) {
//         result4 += "*";
//         z += 1;
       
//     }
//     z=1;
//     result4 += "\n"
//     y +=1;
// }
// console.log(result4);


// // -------------------bmi ---------------

// function bmi(height,weight){
    
// let result= weight/(height*height);
// return result;

// }
// let res=bmi(1.7,60);
// console.log(res);

// let result5=""
// let q=5;
// for (let i = 1; i <= q; i++) {
//     for (let j = 1; j <= i; j++) {
//         if(i%2==0){
//             result5 += j;
//         }else{
//             result5 += "*"
//         }
//     }
//     result5 += "\n"
// }
// console.log(result5);


