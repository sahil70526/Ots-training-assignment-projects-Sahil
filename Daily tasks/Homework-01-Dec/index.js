// --------------- practice for prototypal inheritence ---------------------------------

let obj1={
    name:'Sahil Singh',
    city:'Jaunpur',
    getIntro:function(){
        return `${this.name} from ${this.city}`
    }
}

let obj2={
    name:'Shikha Singh'
}

obj2.__proto__=obj1;

console.log(obj2.city);

console.log(`Hi I am without prototypal inheritence \n ${obj1.getIntro()}`);
console.log(`Hi I am with prototypal inheritence\n ${obj2.getIntro()}`);


// ------------------ practice by class ---------------

class Car{
    constructor(brand){
        this.carName=brand;
    }
}
 myCar=new Car("BMW")
console.log(`Hi I am created with the help of class and costructer function \n ${myCar.carName}`);

// --------------------- parctice for debouncing -------------------------------

let count =0;
const getdata= function (){
    count++
    console.log(count);
}

const debounce= function(fn,delay){
let timer;
return function(){
    let obj3=this;
    clearTimeout(timer);
  timer=setTimeout(() => {
    fn.apply(obj3)
}, delay);
}
}

const betterFunction= debounce(getdata,500);


// --------------------- practice for built our own bind function -------------------------------

// --------------- first of all go with original bind method--------------------------------

let obj4={
    name:'Sahil Singh',
    city:'Jaunpur',
    presentGoal: function (){
     return `Learning javascript in depth`
    }
}

let fun1= function (country){
    return `${this.name } from  ${this.city} currentlly  ${this.presentGoal()}  and from country ${country}`
}

 let my = fun1.bind(obj4);

 console.log(my("India"));

// ---------------------- making our own mybind method ----------------------------

Function.prototype.myBind= function(...args){

    let obj5= this;
    let rest= args.slice(1,args.length);
    return function(...args2){
        return obj5.apply(args[0],[...rest,...args2]);
    }
}

let printContent= fun1.myBind(obj4);
console.log(printContent("India"));