// the size N -> board: N by N
var board = 5;

// keep count of all possible placement of N queen
var count = 0;

// initial state, no piece on board yet, set to -1 for all column
var position = new Array(board).fill(-1);

// holds all available row number to be placed
var allRows = [];
for(var i=0; i<board; i++) allRows[i] = i;

// Main driver program:  trying to put pieces on board
placePiece(board, 0, position);
// print out total number of valid positions!
console.log(count);


// recursive function to systematically place pieces on board
// that satisfies only one queen in each column and each row
function placePiece(N, k, position) {
    // base ending condition
    if( k == N ) {
        if (checkDiagonal(position)) {
            printBoard(position);
            count++;
        }
        return;
    }

    // recursion for column k
    var localPosition = position.slice(0);

    // 1. produce available spot array
    var available = allRows.filter( row => !localPosition.includes(row));
    available.forEach( spot => {
        localPosition[k] = spot;
        placePiece(N, k+1, localPosition);
    });
}

// when there are N queens on board, we need to check if there is attack on diagonal
// position example: [0, 1, 3, 6, 2, 4, 5, 7]
function checkDiagonal(position) {
    // for position array, we extract the index, value, and comparing them if having same jump?
    for (var i=0; i<position.length; i++) {
        for (var j=i+1; j<position.length; j++) {
            // i is the first piece, j is the second piece
            if (j-i == Math.abs(position[j]-position[i]))
                return false;
        }
    }

    return true;
}

// print out the board with queens placed
function printBoard(position) {
    console.log(position);
    
    position.forEach( row => {
        var strRow = "";
        for(var i=0; i<position.length; i++) {
            if (i==row) {
                strRow = strRow + " Q ";
            }
            else {
                strRow = strRow + " - ";
            }
        }
        console.log(strRow);
    });
}
