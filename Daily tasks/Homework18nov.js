// ----------------------- task 1-----------------------------------------

let called = 1;
function final() {
  if (called == 1) {
    console.log("Hi i am from call once function");
  }else{
    console.log("hello");
  }
  called += 1;
}
final();
console.log("trying again");

// Line 16 will fulfill the condition of this call once function.Please enable it before using.
// if(final) throw new Error('This function can only be called once');

final();

// -------------------------- task 2 -----------------------------------------

const arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9];
let result = [];
for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  function flatArr(current) {
    if (isNaN(current)) {
      for (let j = 0; j < current.length; j++) {
        let newCurrent = current[j];
        if (isNaN(newCurrent)) {
          current = newCurrent;
          return flatArr(current);
        } else {
          result.push(newCurrent);
        }
      }
    } else {
      result.push(current);
    }
    return result;
  }
  flatArr(current);
}

console.log(result);


// -------------------- task 3 -----------------------------------
// -----------------  with the help of for loop ------------------

const a = [{name:'amit'}, {name: 'Akshay'}, {name: 'Sahil'}]
const b = [{name: 'amit'},{name:'arun'}, {name:'rahul'}, {name: 'Akshay'}, {name: 'Hrishi'}, {name:'sahil'}]
let result1=[];
  for(let i=0;i<b.length;i++){
    for(let j=0;j<a.length;j++){
      if(b[i].name.toLowerCase()===a[j].name.toLowerCase()){
        result1.push(a[j].name);
      }
    }
  }
console.log(result1);

// ------------------- with the help of map and filter ------------------
// const firstOut=a.map((cur)=>{
//   return cur.name.toLowerCase();
// });
// const secondOut=b.map((cur)=>{
//   return cur.name.toLowerCase();
// });

// // for(let i=0;i<firstOut.length;i++){
// //   let checkNum=firstOut[i];
// //   function check(checkNum){
// //     return checkNum.toLowerCase();
// //   }
// // }

// function check(firstOut){
//   for(let i=0;i<firstOut.length;i++){
//     return firstOut[i];
//   }
// }
// console.log(check(firstOut));
// const finalOut= secondOut.filter(check);
// console.log(finalOut);


