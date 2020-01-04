let resetButton = document.querySelector("#reset");
let startButton = document.querySelector("#start");
let squares = document.querySelectorAll(".square");
let result = document.getElementById("result");
let board = [0,0,0,0,0,0,0,0,0];
let player = "";

reset();

function reset() {
    squares.forEach(square => square.innerHTML = "");
    player = "O";
    board.fill(0);
    result.innerHTML = "";
}

function start() {
    squares.forEach(function(square) {
        square.addEventListener("click", function() {
            let pos = square.getAttribute("name");
            square.innerHTML = player;
            recordScore(pos);
            checkWinner();
            player === "X" ? player = "O" : player = "X";
        });
    });
}

function recordScore(pos) {
    let indexPairs = {
        one: 0,
        two: 1,
        three: 2,
        four: 3,
        five: 4,
        six: 5,
        seven: 6,
        eight: 7,
        nine: 8
    }
    let i = indexPairs[pos];
    board[i] = player;
}

function checkWinner() {
    let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let win = 0;

    wins.forEach(function(item) {
        item.forEach(function(i) {
            if (board[i] === player) {
                win++;
            }
        });
        if (win === 3) {
            result.innerHTML = "Player " + player + " is the winner!";
        } else {
            win = 0;
        }
    });
}

resetButton.addEventListener("click", function() {
    reset();
});

startButton.addEventListener("click", function() {
    start();
});