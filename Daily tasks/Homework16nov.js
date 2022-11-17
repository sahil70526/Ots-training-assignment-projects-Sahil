//---------------------- problem 001 --16 nov---------------------------

let promise = new Promise ((resolved,rejected)=>{
    setTimeout(() => {
        console.log("promise resolved  after 1 seconds.");
        resolved();
    }, 1000);
});

console.log(promise);



let rejectedPromise= new Promise((resolved,rejected)=>{
    rejected();
    console.log("promise rejected .");
})
console.log(rejectedPromise);


//---------------------- problem 002 --16 nov---------------------------

console.log("Hello 1");

Promise.resolve().then((p1)=>console.log("Promise 1"))

console.log("Hello 2");
setTimeout(() => {
    console.log("timeout 1");
}, 500);

setTimeout(() => {
    Promise.resolve().then((p1)=>console.log("Promise 2"));
    setTimeout(() => {
        Promise.resolve().then((p1)=>console.log("Promise 3"));
    }, 0);
    console.log("Hello 3");
    Promise.resolve().then((p1)=>console.log("Promise 4"));
    console.log("Hello 4");
}, 500);

console.log("bye");