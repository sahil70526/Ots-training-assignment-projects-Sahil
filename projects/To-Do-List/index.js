let addBtn= document.getElementById('add');
let clearBtn= document.getElementById('clear');
let persistBtn= document.getElementById('persist');
let val= document.getElementById("toDodata");
let ulData= document.getElementById("toDoItems")

addBtn.addEventListener('click',add);

function add(){
    // ----code for adding
    let item= val.value;
    let list=document.createElement('li');
    list.innerHTML = item;
    ulData.appendChild(list);
    val.value=' ';
}
clearBtn.addEventListener('click',clear);

function clear(){
    // ----code for removing 
}

persistBtn.addEventListener('click',persist);

function persist(){
// -----------code for persist storage---------
}