// ------------ Problem -1 9 Nov-------------------

let result2 = ""

let str1= "ABCDE"


for (let i = 1; i <= str1.length; i++) {
    for (let j = 0; j < i; j++) {
        result2 = result2.concat(str1.slice(j,i))
        break;
    }
    if(i<str1.length){
        result2 += "\n"
    }
}
console.log(result2);
result2=""
for (let i = str1.length-1; i >=1; i--) {
    for (let j = 0; j < i; j++) {
        result2 = result2.concat(str1.slice(j,i))
        break;
    }
  
    result2 += "\n"
   
}
console.log(result2);

// ------------------ problem 2 9Nov------------------
let result3=""
for(let i=1;i<=11;i++){
    for(let j=1;j<=i;j++){
        if(j==1){
            result3 += "*"
        }
        else if(j%2==0){
            result3 += j;
        }else{
            result3 += "*"
        }
    }
    result3 += "\n"
}

console.log(result3);

// ------------------------ problem no 3 9nov------------------------
let str2="My name is Akshay Khurana"
let arr = str2.split(" ");
let result = ""
let starc = 1
let starad = 1
for (let i = 0; i < arr.length; i++) {
    let nstr = arr[i];
    result += nstr;

    for (let j = 1; j <= starc; j++) {
        result += "*"
    }
    result += " ";
    for (let k = 1; k <= starad; k++) {
        if(starad<arr.length){
            result += "@"
        }else{
            break;
        }
    }
    
    starc = starc + 1
    starad= starad +1
}


console.log(result);
// ------------------------------------10 nov tr morning session---------------------------

// // function name(a,b) {
// // let c= a*b;
// // }

// // console.log(name(4,5));

// const radius=[2,3,4,5]

// const area=(radius)=>{
//     return Math.PI*radius*radius
// }

// const hof=(radius,logic)=>{
//     const output=[]
//     for (let index = 0; index < radius.length; index++) {
//         output.push(logic(radius[index]))
        
//     }
//     return output
// }

// console.log(hof(radius,area));


// const arr3=[5,1,3,4];

// // const triple=(x)=>{
// //     return x*3
// // }

// // const final=(triple)=>{
// //    const output= arr3.map(triple) 
// //    console.log(output);
// // }
// let max=0;
// for(let i=0;i<arr3.length;i++){
//     let current= arr3[i];
  
//     if(current>max){
//         max=current;
//     }

// }
// console.log(max);

// const outpu= arr3.reduce(function(max,cur){
//     if(cur>max){
//         max=cur
//     }
//     return max
// },0)

// console.log(outpu);


const users=[
    {firstName:"Akshay",lastName:"Khurana",age:27,gender:"male"},
    {firstName:"Salman",lastName:"Khan",age:55,gender:"male"},
    {firstName:"Riya",lastName:"Rajput",age:34,gender:"female"},
    {firstName:"Simaran",lastName:"Kapoor",age:27,gender:"female"},
]

const reducedOut= users.reduce((final,cur)=>{
  if(cur.age>27){
    final.push(cur.firstName + " " + cur.lastName)
  }
    return final;
},[]);

console.log(reducedOut);

const secondOut= users.filter((cur)=>{
    if(cur.gender=="male"){
        return true
    }
    return false;
}).map((e)=>{
    return {FullName:e.firstName + " " +e.lastName, Age:e.age }
})
console.log(secondOut);

