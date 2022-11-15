// ------------ Problem -1 11 Nov-------------------

let result = ""
let m = 6;
let spacef = 5
for (let i = 0; i <= m; i++) {
    for (let k = 0; k <= spacef; k++) {
        result += " ";
    }
    for (let j = 1; j <= i; j++) {
        result += "*";
    }
    for (let j = 1; j <= i; j++) {
        result += j;
    }
    result += "\n"
    spacef--;
}

console.log(result);

// ------------ Problem -2 11 Nov-------------------
const users = [
    { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
    { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
    { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
    { firstName: "Simaran", lastName: "Kapoor", age: 27, gender: "female" },
]
let result1 = ""
var secondOut = users.map((cur) => {
    return cur.firstName + " " + cur.lastName
})
secondOut = secondOut.join();
result1 += "Names -" + secondOut
const finalSum = users.reduce((sum, cur) => {
    sum += cur.age;
    return sum
}, 0)
let result2 = "";
result2 += "Sum of there ages is - " + finalSum;
const finalOutput = [];
finalOutput.push(result1)
finalOutput.push(result2)
console.log(finalOutput);
