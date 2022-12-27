
// How do you check if a given string is a palindrome-------------

let str = "abba";
let result1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  result1 += str[i];
}
if (result1 === str) {
  console.log("Given string is palindrome");
} else {
  console.log("not palindrome");
}

// If two strings are anagrams of each other------------------

let str1 = "abcdefgh";
let str2 = "bcdfghae";

if (str1.length === str2.length) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] === str2[j]) {
        count += 1;
        break;
      }
    }
  }
  if (count === str1.length) {
    console.log("these are angram strings .");
  } else {
    console.log("not angram");
  }
} else {
  console.log("not angram");
}

// printing duplicates-----------------

let str3 = "asasdfvvffvvcdctht";
let result2 = "";

for (let i = 0; i < str3.length - 1; i++) {
  for (let j = i + 1; j < str3.length; j++) {
    if (str3[i] === str3[j] && !result2.includes(str3[i])) {
      result2 = result2.concat(str3[j]) + ",";
      break;
    }
  }
}

console.log(result2);

// reverse the words of a given string ------------------

let str4 = "This is a string jhfdh fdjnjkfg  klfgknfgdjk";
let newarr = str4.split(" ");
let result3 = [];
for (let i = newarr.length - 1; i >= 0; i--) {
  result3.push(newarr[i]);
}

console.log(result3.join(" "));


// ---- by mirror form ----------------
let Length = newarr.length
for (let i = 0; i <= Length; i++) {
  if (i !== Length) {
    let temp = newarr[i];
    newarr[i] = newarr[Length];
    newarr[Length] = temp;
  }
  Length--
}
console.log(newarr.join(' '));


