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
const flatArr= (array)=>{
  for(let i=0;i<array.length;i++){
    if(isNaN(array[i])){
      flatArr(array[i]);
    }else{
      result.push(array[i]);
    }
  }
}
flatArr(arr);

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

let newObj = {};
b.map((cur) => {
  let value = cur.name.toLowerCase();
  newObj[value] = cur.name.toLowerCase();

});

const filterName = a.filter((item) => {
  let nameValue = item.name.toLowerCase();
  // return newObj[nameValue] ? item : null;
  if(newObj[nameValue]){
    return item;
  }
});
console.log(filterName);
