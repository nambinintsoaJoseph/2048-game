class TileContainer {
    constructor(state) {
        this.state = state;
    }

    initialize() {
        const tileValue = Math.random() < 0.5 ? 2 : 4;
        let position1 = {line: 0, column: 0},
            position2 = {line: 0, column: 0}; 

        // The position of the tiles must be different : 
        do {
            position1.line = Math.floor(Math.random() * 4); 
            position1.column = Math.floor(Math.random() * 4);
            position2.line = Math.floor(Math.random() * 4); 
            position2.column = Math.floor(Math.random() * 4);
        } while(position1.line == position2.line && position1.column == position2.column);

        this.state[position1.line][position1.column] = tileValue; 
        this.state[position2.line][position2.column] = tileValue; 
    }

    emptyBox() {
        const state = this.state;
        let numberEmptyBox = 0;

        state.forEach(line => {
            line.forEach(tileValue => {
                if(tileValue == 0) {
                    numberEmptyBox++
                }
            })
        })

        return numberEmptyBox;
    }

    displayState() {
        const state = this.state; 
        const colors = {
            tile2: '#00C855', 
            tile4: '#D50000',
            tile8: '#C51162', 
            tile16: '#303F9F', 
            tile32: '#444e4c', 
            tile64: '#558B2F', 
            tile128: '#BF360C',
            tile256: '#372723', 
            tile512: '#245A64',
            tile1024: '#311B92', 
            tile2048: '#1B5E20'
        }; 

        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                let currentTile = document.querySelector('.p' + i + j)
                
                if(state[i][j]) {
                    currentTile.textContent = state[i][j]; 
                    currentTile.style.backgroundColor = colors['tile' + state[i][j]]; 
                }
            }
        }   
    }

    checkWin() {
        return this.state.some(currentTile => currentTile.includes(2048)); 
    }

    canMoveLeft() {
        const state = this.state; 
        for(let i = 0; i < 4; i++) {
            for(let j = 1; j < 4; j++) {
                if(state[i][j] !== 0) {
                    // Check if the adjacent box is empty or has the same value 
                    if(state[i][j-1] === 0 || (state[i][j-1] === state[i][j])) {
                        return true;
                    }
                }
            }
        }
        return false; 
    }

    canMoveRight() {
        const state = this.state; 
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 3; j++) {
                if(state[i][j] !== 0) {
                    if(state[i][j+1] === 0 || (state[i][j+1] === state[i][j])) {
                        return true; 
                    }
                }
            }
        }
        return false; 
    }

    canMoveUp() {
        const state = this.state; 
        for(let i = 1; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                if(state[i][j] !== 0) {
                    if(state[i-1][j] === 0 || (state[i-1][j] === state[i][j])) {
                        return true; 
                    }
                }
            }
        }
        return false; 
    }

    canMoveDown() {
        const state = this.state; 
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 4; j++) {
                if(state[i][j] !== 0) {
                    if(state[i+1][j] === 0 || (state[i+1][j] === state[i][j])) {
                        return true; 
                    }
                }
            }
        }
        return false; 
    }
}
