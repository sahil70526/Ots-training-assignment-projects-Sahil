let data = document.getElementById('gamebox');
let count = 0;
let clicked = true;

data.addEventListener('click', (e) => {
    count = count + 1;
    if (count % 2 && clicked) {
        e.target.value = 'X'
        e.target.style.backgroundColor = 'green';
        e.target.disabled=true;
    } else {
        e.target.value = 'O';
        e.target.style.backgroundColor = 'pink';
        e.target.disabled=true;
    }
    let f1 = document.getElementById('f1').value;
    let f2 = document.getElementById('f2').value;
    let f3 = document.getElementById('f3').value;
    let f4 = document.getElementById('f4').value;
    let f5 = document.getElementById('f5').value;
    let f6 = document.getElementById('f6').value;
    let f7 = document.getElementById('f7').value;
    let f8 = document.getElementById('f8').value;
    let f9 = document.getElementById('f9').value;

    // -------------- conditions for tic tac toe game ---------------------
    if ((f1 == 'X') && (f2 == 'X') && (f3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("f4").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }
    else if ((f1 == 'X') && (f4 == 'X') && (f7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }
    else if ((f7 == 'X') && (f8 == 'X') && (f9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f6").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }
    else if ((f3 == 'X') && (f6 == 'X') && (f9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }
    else if ((f1 == 'X') && (f5 == 'X') && (f9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }
    else if ((f3 == 'X') && (f5 == 'X') && (f7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }
    else if ((f2 == 'X') && (f5 == 'X') && (f8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }
    else if ((f4 == 'X') && (f5 == 'X') && (f6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player X won');
            location.reload();
        }, 500);
    }

    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((f1 == 'O') && (f2 == 'O') && (f3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f4").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);
    }
    else if ((f1 == 'O') && (f4 == 'O') && (f7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);
    }
    else if ((f7 == 'O') && (f8 == 'O') && (f9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f6").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);
    }
    else if ((f3 == 'O') && (f6 == 'O') && (f9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f5").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);
    }
    else if ((f1 == 'O') && (f5 == 'O') && (f9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);
    }
    else if ((f3 == 'O') && (f5 == 'O') && (f7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);
    }
    else if ((f2 == 'O') && (f5 == 'O') && (f8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f4").disabled = true;
        document.getElementById("f6").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);  
    }
    else if ((f4 == 'O') && (f5 == 'O') && (f6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("f1").disabled = true;
        document.getElementById("f2").disabled = true;
        document.getElementById("f3").disabled = true;
        document.getElementById("f7").disabled = true;
        document.getElementById("f8").disabled = true;
        document.getElementById("f9").disabled = true;
        setTimeout(() => {
            window.alert('Player O won');
            location.reload();
        }, 500);
    }

    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((f1 == 'X' || f1 == 'O') && (f2 == 'X'
        || f2 == 'O') && (f3 == 'X' || f3 == 'O') &&
        (f4 == 'X' || f4 == 'O') && (f5 == 'X' ||
            f5 == 'O') && (f6 == 'X' || f6 == 'O') &&
        (f7 == 'X' || f7 == 'O') && (f8 == 'X' ||
            f8 == 'O') && (f9 == 'X' || f9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        setTimeout(() => {
            window.alert('Match Tie');
        }, 500);
        location.reload();
    } else {
        if (count % 2) {
            document.getElementById('print')
                .innerHTML = "Player O Turn";
        }else{
            document.getElementById('print')
            .innerHTML = "Player X Turn";
        }
    }
    
});

function restart(){
    location.reload(); 
}