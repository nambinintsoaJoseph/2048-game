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
            position1.line = Math.floor(Math.random() * 3); 
            position1.column = Math.floor(Math.random() * 3);
            position2.line = Math.floor(Math.random() * 3); 
            position2.column = Math.floor(Math.random() * 3);
        } while(position1.line == position2.line && position1.column == position2.column)

        this.state[position1.line][position1.column]  = tileValue; 
        this.state[position2.line][position2.column] = tileValue; 
    }
}



