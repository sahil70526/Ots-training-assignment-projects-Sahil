// https://www.youtube.com/watch?v=ZvbzSrg0afE
// https://www.youtube.com/watch?v=8aGhZQkoFbQ


//memoized sum------------------
function finalSum() {
    let obj = {};
    return function (x, y) {
      if (obj[(x, y)]) {
        console.log(`previously done on this argument ${x} ${y} is : ${obj[(x,y)]}`);
        console.log(obj);
        return obj[(x, y)];
        
      }
      console.log(`Sum of ${x} ${y} is:`);
      const result = x + y;
      obj[(x, y)] = result;
      console.log(result);
      console.log(obj);
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