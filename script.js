let table = document.getElementById("container");

const boxDisplay = document.querySelector(".box");

let count = {
    "grass" : 0,
    "grase": 0,
    "tree" : 0,
    "tree-trunk" : 0,
    "stone" : 0
}

let cursor = "";
let selectedBlockFromInventory = null;

for(let i=1; i<= 960 ;i++){
    if(i <= 320) { createElement("sky") }

    if( i > 320 && i <= 616) {

        if(i === 325 || i === 326 || i === 337 || i === 338 || i ===344 || i === 345
            || (i >= 364 && i <= 367) || (i >= 376 && i <= 379)
            || (i >= 383 && i <= 386) || (i >= 403 && i <= 408) || (i >= 415 && i <= 420) 
            || (i >= 443 && i < 449) || i === 453 || (i >= 492 && i <= 494)
            || ( i >= 422 && i <= 427)
        ) { createElement("tree") } 

        else if (i === 533 || i === 573 || i === 613 || i === 485 || i === 486 || i === 525 || i === 526
            || i === 565 || i === 566 || i === 605 || i === 606 || 
            i === 464 || i === 465 || i === 504 || i === 505 || i === 544 || i === 545 || i === 584 || i === 585
            || i === 457 || i === 458 || i === 497 || i === 498 || i === 537 || i === 538 || i === 577 || i === 578
        ) { createElement("tree-trunk") } 

        else { createElement("sky") }
        }

    if( i > 616 && i <= 760) {

        if (i >= 416 && i <= 656) { createElement("grass"); } 
        else { createElement("grase"); }
        }

    if( i > 760) { createElement("stone"); }
}


function createElement(type) {
        const block = document.createElement('div');
        block.classList.add("block")
        block.classList.add(type);
        table.appendChild(block);

        block.addEventListener("click", () => {
        handleBlockClick(block)
        }) 
}


function resetGame(){
    const button = document.querySelector(".div-reset");
    button.addEventListener("click", ()=> {
    })
}


function handleBlockClick(block){
    const currentType = block.classList[1]
    if (cursor !== "inventory") {
        if (
            (cursor === "ax" && (currentType === "tree" || currentType === "tree-trunk")) ||
            (cursor === "shovel" && (currentType === "grass" || currentType === "grase")) ||
            (cursor === "mining" && currentType === "stone")
        ) {
            count[currentType]++;
            block.classList.remove(currentType);
            block.classList.add("sky")
            updateInventoryUI()
        }
    } 
    else if (cursor === "inventory" &&
         selectedBlockFromInventory &&
          currentType === "sky") {
            if (count[selectedBlockFromInventory] > 0) {
                block.classList.remove("sky")
                block.classList.add(selectedBlockFromInventory)
                count[selectedBlockFromInventory]--
                updateInventoryUI()
            }
    }
}



function updateInventoryUI() {
    boxDisplay.innerHTML = ""
    for(let item in count) {
        const itemDiv = document.createElement("div")
        itemDiv.className = `inventory-item ${item}`
        itemDiv.innerHTML = `<span>${count[item]}</span>`
        itemDiv.onclick = (e) => {
            e.stopPropagation()
            selectItemFromInventory(item);
        }
        boxDisplay.appendChild(itemDiv)
    }
}


function selectItemFromInventory(item) {
    cursor = "inventory"
    selectedBlockFromInventory = item
    document.body.style.cursor = "pointer"
}



function changeCursor(tool){
    if(tool.classList[0] === "ax") {
        cursor = "ax";
        document.body.style.cursor = "url('image/ax.ico'), auto"    
    }
    if (tool.classList[0] === "shovel") {
        cursor = "shovel";
        document.body.style.cursor = "url('image/shovel.ico'),auto"
    }
    if (tool.classList[0] === "mining") {
    cursor = "mining";
    document.body.style.cursor = "url('image/pickaxe.ico'),auto"
    }
    if (tool.classList[0] === "sword") {
    cursor = "sword";
    document.body.style.cursor = "url('image/sword.ico'),auto"
    }
}