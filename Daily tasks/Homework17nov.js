//---------------All session ------------------------------

// function getData(country){
//     const data = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((result)=>result.json())
//     .then((data1)=>console.log(data1[1].borders ))
// }

// console.log(getData('india'));

// function getData1(country){
//     const data = fetch(`https://restcountries.com/v2/alpha/${country}`)
//     .then((result)=>{
//         if(!result.ok) throw new Error("bhag ")
//     }
//     ).catch((e)=>{console.log(e)})

// }

// console.log(getData1('hd'));

//---------------morning session Home Work ------------------------------
// -----------------  task 1 ---------------

function student(name, roll, age) {
  this.name = name;
  this.roll = roll;
  this.age = age;
}

const Student = new student();
Student.name = "sahil Singh";
Student.roll = 1;
Student.age = 22;
console.log(Student);

// ----------------------task 3------------------------
const obj = { name: "amit", class: "B.tech", roll: 123 };
console.log(obj);

const Student2 = new Object();
Student2.name = "Vishal Maurya";
Student2.Address = "Jaunpur";
console.log(Student2);

//task 2 memoized multiplication----------------
function final() {
  let cache = {};
  return function multiplication(x, y) {
    if (cache[x + "" + y] || cache[y + "" + x]) {
      return `Already calculated multiplication of ${x},${y} is ${cache[x + "" + y]}`;
    }
    let result = x * y;
    cache[x + "" + y] = result;
    cache[y + '' + x] = result;
    return `The multiplication of the numbers ${x},${y} is ${result}`;
  };
}
const memoizedMultiplication = final();
console.log(memoizedMultiplication(2, 4));
console.log(memoizedMultiplication(4, 4));
console.log(memoizedMultiplication(4, 2));
console.log(memoizedMultiplication(4, 5));
console.log(memoizedMultiplication(5, 4));

//------------------Afternoon session ------------------------

function getData(neighbours) {
  const data = fetch(`https://restcountries.com/v2/name/${neighbours}`)
    .then((result) => {
      if (!result.ok) throw new Error("the country has no neighbours.");
      return result.json();
    })
    .then((data1) => {
      console.log(data1[1].borders);
    })
    .catch((err) => console.log(err));
}

console.log(getData("china"));

// ---------------------- 21 nov afternoon session task -----------------

const uri = 'https://reqres.in/api/users';

async function getData1() {
  6
  const data2 = await fetch(uri);
  const result6 = await data2.json();
  console.log(result6);
}
getData1();


// --------- flat arr with reduce function ------------------------------


let arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9]

let newArr = arr.reduce((acc, curr) => {

  return acc.concat(curr)

}, [])

let NewArr = newArr.reduce((accu, curr) => {

  return accu.concat(curr)

}, [])

let FinalArr = NewArr.reduce((accu, curr) => {

  return accu.concat(curr)

}, [])

console.log(FinalArr)

