let btnUp = document.querySelector('.up'), 
    btnDown = document.querySelector('.down'), 
    btnLeft = document.querySelector('.left'), 
    btnRight = document.querySelector('.right'), 
    btnStart = document.querySelector('.start'); 

let gameTiles = new TileContainer(
    [
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0], 
        [0, 0, 0, 0]
    ]
); 

btnStart.addEventListener('click', (e) => {
    let target = e.target;

    if(target.nodeName.toLowerCase() === 'button') {
        target.lastElementChild.textContent = ' Restart';
    }
    else {
        if(target.nodeName.toLowerCase() === 'i') {
            target.nextSiblingElement.textContent = 'Restart'; 
        }
        else {
            target.textContent = 'Restart'; 
        }
    }

    gameTiles.eraseScreen(); 

    gameTiles.initialize(); 
    gameTiles.displayState();     
}, false); 