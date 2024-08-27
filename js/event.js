let btnUp = document.querySelector('.up'), 
    btnDown = document.querySelector('.down'), 
    btnLeft = document.querySelector('.left'), 
    btnRight = document.querySelector('.right'), 
    btnStart = document.querySelector('.start'); 

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

    // Beginning of the game 
    
}, false); 