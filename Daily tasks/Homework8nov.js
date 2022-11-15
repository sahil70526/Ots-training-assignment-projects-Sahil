// ------------ Problem -1 8 Nov-------------------

let result3 = ""
let m = 7;
let spacef = 3
let spaceb = 1
for (let i = 1; i <= m; i = i + 2) {
    for (let k = 0; k <= spacef; k++) {
        result3 += " ";
    }
    for (let j = 1; j <= i; j++) {
        result3 += "*";
    }


    result3 += "\n"
    spacef--;

}
for (let o = 5; o >= 1; o = o - 2) {
    for (let p = 0; p <= spaceb; p++) {
        result3 += " ";
    }
    for (let q = 1; q <= o; q++) {
        result3 += "*"
    }
    result3 += "\n"
    spaceb++;
}
console.log(result3);

// ---------------------problem-2 ------------------
let reverseNum = 0;

function reverse(num) {
    let d = parseInt(num);
    let str = d.toString()
    for (let a = 0; a < str.length; a++) {

        let newNum = d % 10;
        reverseNum = reverseNum * 10 + newNum;
        d = parseInt(d / 10);
    }
    return reverseNum
}
let fg = reverse(1025);
console.log(fg);

// -------------------- class problem---------------

let str = "A man is besides the road"
let arr = str.split(" ");
let result = ""
let starc = 1
for (let i = 0; i < arr.length; i++) {
    let nstr = arr[i];
    result += nstr;

    for (let j = 1; j <= starc; j++) {
        result += "*"


    }


    starc = starc + 1



}

console.log(result);

