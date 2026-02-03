


let table = document.getElementById("container");



for(let i=1; i<= 960 ;i++){
    if(i <= 320) {
        const block = document.createElement('div');
        block.classList.add('sky');
        table.appendChild(block)

    }

    if( i > 320 && i <= 616) {
        if(i === 325 || i === 326 || i === 337 || i === 338 || i ===344 || i === 345
            || (i >= 364 && i <= 367) || (i >= 376 && i <= 379)
            || (i >= 383 && i <= 386) || (i >= 403 && i <= 408) || (i >= 415 && i <= 420) 
            || (i >= 443 && i < 449) || i === 453 || (i >= 492 && i <= 494)
        ){
        const block = document.createElement('div');
        block.classList.add('tree');
        table.appendChild(block)
        } else{
        const block = document.createElement('div');
        block.classList.add('sky');
        table.appendChild(block)
        }
        
    }

    if( i > 616 && i <= 760) {
        const block = document.createElement('div');
        block.classList.add('grase');
        table.appendChild(block)
    }

    if( i > 760) {
        const block = document.createElement('div');
        block.classList.add('stone');
        table.appendChild(block)
    }
    // const block = document.createElement('div');
    
    // block.innerHTML=  `${i}`
    // block.classList.add('block');
    // table.appendChild(block)
}