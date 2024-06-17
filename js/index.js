const API = 'https://jsonplaceholder.typicode.com/todos/';
const listItems = document.getElementById("list-items");

let items = [];

async function getItems(api) {
    let res = await fetch(api);
    let resJson = await res.json();
    items.push(resJson)
    console.log("ok");
    resJson.forEach(el =>{
        newWindows(el)
    })
}

function newWindows(item) {
    let div = document.createElement("div");
    div.classList.add("item-box");
    div.innerHTML = `<img src="./img/pasta.jpg" alt="pasta">
                     <h4>${item.title}</h4>
                     <p>2400$</p>
                    `
    listItems.appendChild(div);
    console.log("ok");
}

getItems(API);


