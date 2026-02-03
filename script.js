


let table = document.getElementById("container");



for(let i=1; i<= 960 ;i++){
    if(i <= 320) {
        const block = document.createElement('div');
        block.classList.add('sky');
        table.appendChild(block)

    }

    if( i > 320 && i <= 600) {
        const block = document.createElement('div');
        block.classList.add('tree');
        table.appendChild(block)
    }

    if( i > 600 && i <= 760) {
        const block = document.createElement('div');
        block.classList.add('grase');
        table.appendChild(block)
    }

    if( i > 760) {
        const block = document.createElement('div');
        block.classList.add('stone');
        table.appendChild(block)
    }
    const block = document.createElement('div');
    
    // block.innerHTML=  `${i}`
    // block.classList.add('block');
    // table.appendChild(block)
}