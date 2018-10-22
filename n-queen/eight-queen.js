
// use Permutation 8!
// each column to have 1 queen;
// the next column to place queen on a row that has not been taken by previous queen
function placeQueen() {
    // 1. create and initialize board
    var board = new Array(8);
    for (var i=0; i<board.length; i++) {
        board[i] = new Array(8);
        for (var j=0; j<board.length; j++) {
            // board[i][j] = "[" + i + "," + j + "]";
            board[i][j] = 0;
        }

        // console.log("row " + i + ": " + board[i]);
    }

    // 2. place queens
    var column = new Array(8).fill(1);
    for (var i=0; i<board.length; i++) {
        var k = Math.floor((Math.random() * board.length));
        board[i][k] = 1;
        // if (column[k] == 1) {
        //     column[k] = 0;
        // }
    }

    veifyBoard(board);

    printBoard(board);
}

// check if there any attack between queens
function veifyBoard(board) {
    return verifyColumn(board);
}

function verifyColumn(board) {
    for (var j=0; j<board.length; j++) {
        var val = 0;
        for (var i=0; i<board.length; i++) {
            val = val + board[i][j];
        }
        // check rowValue
        if (val > 1) {
            console.log("broken column: " + j);
            return false;
        }
    }
}

function verifyRow(board) {
    for (var i=0; i<board.length; i++) {
        var val = 0;
        for (var j=0; j<board.length; j++) {
            val = val + board[i][j];
        }
        // check rowValue
        if (val > 1)
            return false;
    }
}

// print out the board with queens placed
function printBoard(board) {
    for (var i=0; i<board.length; i++) {
        var row = "";
        for (var j=0; j<board.length; j++) {
            if (board[i][j] == 1) {
                row = row + " Q ";
            }
            else {
                row = row + " - ";
            }
        }
        console.log(row);
    }
}

// call it
placeQueen();
