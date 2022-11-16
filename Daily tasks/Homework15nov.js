// https://www.youtube.com/watch?v=ZvbzSrg0afE
// https://www.youtube.com/watch?v=8aGhZQkoFbQ


//memoized sum------------------
function finalSum() {
    let obj = {};
    return function (x, y) {
      if (obj[(x, y)]) {
        console.log(`previously done on this argument ${x} ${y} is : ${obj[(x,y)]}`);
        // console.log(obj);
        return obj[(x, y)];
        
      }
      console.log(`Sum of ${x} ${y} is:`);
      const result = x + y;
      obj[(x, y)] = result;
      console.log(result);
      // console.log(obj);
    }
  }
  const output = finalSum();
  output(4, 5);
  output(44, 4);
  output(4, 5);
 

  //------------- problem 2 ------------------------

//   Read about Function Currying & Create a Program to print list of names.
//   Example -
//   printList("Akshay")("Khurana")("Manisha")("Rahul") -
//   Output - Names are -  Akshay, Khurana, Manisha, Rahul


function  printList(name) {
  return function (name1) {
    return function (name2){
      return function (name3){
        return `Names are - ${name}, ${name1}, ${name2}, ${name3}`
      }
    }
  }
}
 console.log(printList("Akshay")("Khurana")("Manisha")("Rahul"));

//  setTimeout(() => {
//   console.log("Delayed for 1 second.");
// }, "1000")








// Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout.
// Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout.