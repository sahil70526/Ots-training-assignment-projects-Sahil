
const users=[
    {firstName:"Akshay",lastName:"Khurana",age:27,gender:"male"},
    {firstName:"Salman",lastName:"Khan",age:55,gender:"male"},
    {firstName:"Riya",lastName:"Rajput",age:34,gender:"female"},
    {firstName:"Simaran",lastName:"Kapoor",age:27,gender:"female"},
]
// ------------------------- hw 10 nov prob 001 --------------------------
const secondOut= users.reduce((final,e)=>{
    if(e.gender=="female"){
        final.push("My name is "+e.firstName+" "+e.lastName + ". I am "+e.age+" years old.")
    }
    return final
},[])
console.log(secondOut);

// ------------------------- hw 10 nov prob 002 --------------------------

const secondOut2= users.reduce((final,e)=>{
    if(e.age==27){
        final.push(e.firstName+" "+e.age)
    }
    return final
},[])
console.log(secondOut2);


