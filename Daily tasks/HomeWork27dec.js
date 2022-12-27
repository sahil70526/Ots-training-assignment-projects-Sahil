// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Given an integer x, return true if x is a palindrome, and false otherwise.
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

// // -- stack and queue problem -------------------
// Implement Queue in javascript.
// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
// ---------- problem -001 ------------------

let arr= [12,23,12,3,5,6,7];
let num=24;
 
console.log(twoSum(arr,num));

function twoSum(arr,target){
    let obj={};
    for(let i=0;i<=arr.length;i++){
        let num1= target-arr[i];
        if(obj.i===num1){
            return obj.i;
        }else{
            obj.i=num1
        }
    }
}