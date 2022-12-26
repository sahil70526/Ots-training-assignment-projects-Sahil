// Reverse words in a given string
// Print duplicate characters from a string
// If two strings are anagrams of each other
// How do you check if a given string is a palindrome

// How do you check if a given string is a palindrome-------------

let str='abba';
let newStr1='';
for(let i=str.length-1;i>=0;i--){
   newStr1 += str[i];
}
if(newStr1===str){
    console.log("Given string is palindrome");
}else{
    console.log('not palindrome');
}

// 
