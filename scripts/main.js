var squareCount = 10;
var squareSize;
var squares = [];

var Square = function (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.draw = function () {
        fill(this.color);
        rect(this.x, this.y, squareSize, squareSize);
    }
}

function instantiateSquares() {
    var square;
    for (var i = 0; i < squareCount + 2; i++) {
        squares.push([]);
        for (var j = 0; j < squareCount + 2; j++) {
            square = new Square((i - 2) * squareSize, (j - 2) * squareSize, ((i + (j % 2)) % 2) * 255);
            console.log(square.x + ", " + square.y);
            squares[i].push(square);
        }
    }
}

function drawSquares() {
    for (var i = 0; i < squares.length; i++) {
        for (var j = 0; j < squares[i].length; j++) {
            squares[i][j].x += j % 2;
            squares[i][j].draw();
            if (squares[i][j].x >= width + squareSize) {
                squares[i][j].x = -squareSize;
            }
        }
    }
}

function setup () {
    createCanvas(1080, 720);
    noStroke();
    background(255);
    angleMode(DEGREES);
    squareSize = width / squareCount;
    
    instantiateSquares();
}

function draw () {
    clear();
    drawSquares();
}
