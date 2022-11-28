let addBtn = document.getElementById('add');
let clearBtn = document.getElementById('clear');
let persistBtn = document.getElementById('persist');
let val = document.getElementById("toDodata");
let ulData = document.getElementById("toDoItems")
let result = [];

addBtn.addEventListener('click', add);
function add() {
    // ----code for adding
    let item = val.value;
    item = item.trim();
    if (item) {
        let list = document.createElement('li');
        let cross = document.createElement('span')
        list.innerText= item;
        cross.innerText = '-';
        cross.className = 'cross';
        list.appendChild(cross)
        ulData.appendChild(list);
        result.push(item);

        // ------------ code for removing done items ---------------------

        cross.addEventListener('click', () => {
            sessionStorage.setItem('listItem', JSON.stringify(result))
            list.remove();
        });
    }
    val.value = ' '
}

// -------------- code for removing all items-------------------

clearBtn.addEventListener('click', () => {
    sessionStorage.setItem('listItem', JSON.stringify(result))
    ulData.innerHTML = ' ';
});

persistBtn.addEventListener('click', persist);


function persist() {
    // -----------code for persist storage---------


    let itempr = JSON.parse(sessionStorage.getItem('listItem'));
    if (itempr) {
        for (let i = 0; i < itempr.length; i++) {
            let listpr = document.createElement('li');
            let crosspr = document.createElement('span')
            listpr.innerText = itempr[i];
            crosspr.innerText = '-';
            crosspr.className = 'cross';
            listpr.appendChild(crosspr)
            ulData.appendChild(listpr);
            crosspr.addEventListener('click', () => {
                listpr.remove();
            });
        }
    }
   
    sessionStorage.clear();
}

sessionStorage.clear();