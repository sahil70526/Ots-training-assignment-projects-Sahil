let data= document.getElementById('gamebox');

let count = 0;
let clicked= true;

data.addEventListener('click',(e)=>{
    count=count+1;
    if (count%2 && clicked) {
        e.target.value='X'
        e.target.style.backgroundColor='green';
    }else{
        e.target.value='O';
        e.target.style.backgroundColor='pink';
    }
    let f1=document.getElementById('f1').value;
    let f2=document.getElementById('f2').value;
    let f3=document.getElementById('f3').value;
    let f4=document.getElementById('f4').value;
    let f5=document.getElementById('f5').value;
    let f6=document.getElementById('f6').value;
    let f7=document.getElementById('f7').value;
    let f8=document.getElementById('f8').value;
    let f9=document.getElementById('f9').value;
    
});
