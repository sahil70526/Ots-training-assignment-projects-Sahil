let data= document.getElementById('List');
let col=1;

data.addEventListener('click',(e)=>{
    col = col+1;
   if(col%2){
    e.target.style.backgroundColor='red'
   }else{
    e.target.style.backgroundColor='white'
   }
})