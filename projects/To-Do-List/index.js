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
        list.innerText = item;
        cross.innerText = '-';
        cross.className = 'cross';
        list.appendChild(cross)
        ulData.appendChild(list);
        result.push(item);
        sessionStorage.setItem('listItem', JSON.stringify(result))

        // ------------ code for removing done items ---------------------

        cross.addEventListener('click', () => {
            list.remove();
        });
    }
    val.value = ' '
}

// -------------- code for removing all items-------------------

clearBtn.addEventListener('click', () => {
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

window.onload = () => {
    // -----------code for onload ---------


    let itemwn = JSON.parse(sessionStorage.getItem('listItem'));
    result.push(...itemwn)
    console.log(itemwn);
    if (itemwn) {
        for (let i = 0; i < itemwn.length; i++) {
            let listwn = document.createElement('li');
            let crosswn = document.createElement('span')
            listwn.innerText = itemwn[i];
            crosswn.innerText = '-';
            crosswn.className = 'cross';
            listwn.appendChild(crosswn)
            ulData.appendChild(listwn);
            crosswn.addEventListener('click', () => {
                listwn.remove();
            });
        }
    }
    sessionStorage.clear();
}


