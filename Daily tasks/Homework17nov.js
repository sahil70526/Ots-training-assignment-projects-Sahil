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
    cache[y+''+x]=result;
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

const uri='https://reqres.in/api/users';

async function getData1(){
  const data2= await fetch(uri);
  const result6= await data2.json();
  console.log(result6);
}
getData1();

// // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en
// Homework for today:
// In this challenge you will build a function 'whereAmI' which renders a location based on GPS coordinates. For that, you will use a second API to geocode coordinates.
// Here are your tasks
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding : https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en. Use the fetch API and promises to get the data.
// 3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Noida.'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. Create this using both then method and async await keyword. Do error handling with try/catch block
// Note: We have geoLocation method for getting the current coordinates:
// https://www.w3schools.com/jsref/prop_nav_geolocation.asp
// w3schools.comw3schools.com
// Navigator geolocation Property
// W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more. (6 kB)


// HTTP Status Code:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// developer.mozilla.orgdeveloper.mozilla.org
// HTTP response status codes - HTTP | MDN
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed.
// Responses are grouped in five classes&colon; (24 kB)