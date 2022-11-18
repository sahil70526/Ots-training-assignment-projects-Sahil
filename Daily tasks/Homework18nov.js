// task 1
// call once function
// desc: create a function which can't be called more than once
// function sum (){
// }
// sum()
// sum() // new throw()
//task 2
// const arr = [[1,2], [2, 4, [5, 6, [2, 4]]], 8, 9]
// create a fucntion to flat the array => [1,2,2,4,5,6,2,4,8,9]
// task 3
// a = [{name:'amit'}, {name: 'Akshay'}]
// b = [{name: 'abcd'},{name:'abdc'}, {name:'kjdshck}, {name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
// result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
//print common values when matches the a & b.


let count =1;
for(let i=0;i<count;i++){
    if(i==0){
        function name1(name){
            console.log(name);
           
        }
        break;
    }else{
        console.log("this function can only be called once");
    }
} 


name1('Sahil Singh');
name1('Sahil Singh');