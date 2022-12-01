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

