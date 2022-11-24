

function change(e) {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    if (e.target.name == 'first') {
        num1 = e.target.value;
    } else if (e.target.name == 'second') {
        num2 = e.target.value;
    } else {
        num3 = e.target.value;
    }

    document.getElementById("main").style.backgroundColor = (`rgb(${num1}, ${num2}, ${num3})`);
}
