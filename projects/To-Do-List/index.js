let addBtn= document.getElementById('add');
let clearBtn= document.getElementById('clear');
let persistBtn= document.getElementById('persist');
let val= document.getElementById("toDodata");
let ulData= document.getElementById("toDoItems")
let result =[];

    addBtn.addEventListener('click',add);
    function add(){
        // ----code for adding
        let item= val.value;
        result.push(item);
       if(item){
        let list=document.createElement('li');
        list.innerHTML = item;
        ulData.appendChild(list);
        // ------------ code for removing done items ---------------------
    
        list.addEventListener('click',()=>{
            list.remove();
        });
    }
    val.value=' '
       }

        // -------------- code for removing all items-------------------
     
        clearBtn.addEventListener('click',()=>{
            ulData.innerHTML=' ';
        });

persistBtn.addEventListener('click',persist);

console.log(result);

function persist(){
// -----------code for persist storage---------
}