


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
            || ( i >= 422 && i <= 427)
        ){
        const block = document.createElement('div');
        block.classList.add('tree');
        table.appendChild(block)
        } else if (i === 533 || i === 573 || i === 613 || i === 485 || i === 486 || i === 525 || i === 526
            || i === 565 || i === 566 || i === 605 || i === 606 || 
            i === 464 || i === 465 || i === 504 || i === 505 || i === 544 || i === 545 || i === 584 || i === 585
            || i === 457 || i === 458 || i === 497 || i === 498 || i === 537 || i === 538 || i === 577 || i === 578
        ) {
        const block = document.createElement('div');
        block.classList.add('tree-trunk');
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