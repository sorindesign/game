var myGamePiece;

function startGame() {
    myGamePiece = new component(20, 20, "blue", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 150;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[9]);
        this.interval = setInterval(updateGameArea, 20);

        document.querySelector("canvas").onclick = function() {
            //alert('You clicked the canvas!');
            stopMovement();
        }
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 2;
    this.speedY = 2;
    this.stop = false;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        if (this.stop === false){
            this.x += this.speedX;
            this.y += this.speedY;
            this.hitMargin();
        }
    }
    this.hitMargin = function() {
        var leftMargin = 0;
        var rightMargin = myGameArea.canvas.width - this.width;
        var rocktop = 0;
        var rockbottom = myGameArea.canvas.height - this.height;

        if (this.y > rockbottom || this.y < rocktop) {
            this.speedY = -this.speedY
            //alert('margin reached')
        }
        if (this.x > rightMargin || this.x < leftMargin) {
            this.speedX = -this.speedX
            //alert('margin reached')
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function stopMovement(){
    myGamePiece.stop =! myGamePiece.stop;
}

function moveup() {
    myGamePiece.speedY *= 2;
}

function movedown() {
    myGamePiece.speedY /= 2;
}

function moveleft() {
    myGamePiece.speedX *= 2;
}

function moveright() {
    myGamePiece.speedX /= 2;
}
