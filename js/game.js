class Game {
  constructor(
    ctx,
    field,
    player1,
    player2,
    bullet1,
    bullet2,
    bullet3,
    bullet4,
    doll,
    background,
  ) {
    this.ctx = ctx;
    this.field = field;
    this.player1 = player1;
    this.player2 = player2;
    this.bullet1 = bullet1;
    this.bullet3 = bullet3;
    this.bullet2 = bullet2;
    this.bullet4 = bullet4;
    this.doll = doll;
    this.frameNumber = 0;
    this.continueGame = true;
    //this.seconds = 0;
    this.win1 = false;
    this.win2 = false;
    this.background = background;
    this.reqId = 0
    this.onePlayerGame = false
    this.twoPlayersGame = false
  }


  init() {
    this.frameNumber = 0
    clearInterval(doll.intervalId)
    cancelAnimationFrame(this.reqId)
    this.ctx.restore()
    this.ctx.canvas.width = 1200;
    this.ctx.canvas.height = 540;
    
    
    //////////////////////// restart
    
    this.continueGame = true;
    this.win1 = false;
    this.win2 = false;
    this.player1.x = 1100
    this.player1.y = 150
    this.player2.x = 1100
    this.player2.y = 370
    this.player1.tl = 1
    this.player1.tr = 1
    this.player1.td = 1
    this.player1.tu = 1
    this.player1.gOver = false
    this.player1.walking = false
    this.player1.stillPosition = []
    this.player2.tl = 1
    this.player2.tr = 1
    this.player2.td = 1
    this.player2.tu = 1
    this.player2.gOver = false
    this.player2.walking = false
    this.player2.stillPosition = []
    this.bullet1.spriteColumns = 8;
    this.bullet1.spriteRows = 1;
    this.bullet1.spriteCol = 0;
    this.bullet1.spriteRow = 0;
    this.bullet2.spriteColumns = 8;
    this.bullet2.spriteRows = 1;
    this.bullet2.spriteCol = 0;
    this.bullet2.spriteRow = 0;
    this.bullet3.spriteColumns = 8;
    this.bullet3.spriteRows = 1;
    this.bullet3.spriteCol = 0;
    this.bullet3.spriteRow = 0;
    this.bullet4.spriteColumns = 8;
    this.bullet4.spriteRows = 1;
    this.bullet4.spriteCol = 0;
    this.bullet4.spriteRow = 0;
    arrowLeft = false;
    arrowRight = false;
    arrowUp = false;
    arrowDown = false;
    keyA = false;
    keyS = false;
    keyD = false;
    keyW = false;
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.doll.color = "red";
    this.doll.counter = 0;
    this.doll.sing = true
    this.doll.seconds = 0;
    this.continueGame = true;
    this.start();
  }
  
  start() {
  
    this.doll.start(this.frameNumber);
    this.frameNumber += 1;
    this.move();
    this.checkGameOver();
    this.checkWin();
    player1.checkCollisions(this.frameNumber);
    player2.checkCollisions(this.frameNumber);
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.draw();
    if (this.continueGame) this.reqId = requestAnimationFrame(this.start.bind(this));
  }

  move() {
    this.player1.move(this.frameNumber);
    if(!this.onePlayerGame)this.player2.move(this.frameNumber);
    this.bullet1.move(this.frameNumber);
    this.bullet2.move(this.frameNumber);
    this.bullet3.move(this.frameNumber);
    this.bullet4.move(this.frameNumber);
    this.doll.move(this.seconds);
    
  }

  draw() {
    if(!this.onePlayerGame)this.player2.draw();
    this.player1.draw();
    this.bullet1.draw(this.frameNumber);
    this.bullet2.draw(this.frameNumber);
    this.bullet3.draw(this.frameNumber);
    this.bullet4.draw(this.frameNumber);
    this.field.draw();
    this.background.draw()
    this.background.setSpriteFrame(this.frameNumber)
    this.player1.gOverBoard()
    if(!this.onePlayerGame)this.player2.gOverBoard()
    this.doll.draw();
    this.player1.laserDraw()
    if(!this.onePlayerGame)this.player2.laserDraw()
    if(!this.continueGame && !this.win1 && !this.win2){this.gameOverCanvas()}
    if(this.win1){this.win1Canvas()}
    if(this.win2){this.win2Canvas()}
    // this.bullet.draw()
  }

  checkGameOver() {
    if (player1.gOver && (player2.gOver || this.onePlayerGame)) {
      this.continueGame = false;
              
    }
  }

  gameOverCanvas(){
       //this.ctx.save();
       this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
       this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
       this.ctx.fillStyle = "red";
       this.ctx.textAlign = "center";
       this.ctx.font = "bold 90px sans-serif";
       this.ctx.fillText(
         "Game Over",
         this.ctx.canvas.width / 2,
         this.ctx.canvas.height / 3
       );
    

  }

  win1Canvas(){
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
       this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
       this.ctx.fillStyle = "red";
       this.ctx.textAlign = "center";
       this.ctx.font = "bold 90px sans-serif";
       this.ctx.fillText(
         "Player 1 Wins",
         this.ctx.canvas.width / 2,
         this.ctx.canvas.height / 3
       );
  }
  win2Canvas(){
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
       this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
       this.ctx.fillStyle = "red";
       this.ctx.textAlign = "center";
       this.ctx.font = "bold 90px sans-serif";
       this.ctx.fillText(
         "Player 2 Wins",
         this.ctx.canvas.width / 2,
         this.ctx.canvas.height / 3
       );
  }

  checkWin() {
    if (this.player1.x <= 220) {
      console.log("PLAYER 1 WINS!!!!");
      this.win1 = true;
      this.continueGame = false;
    }
    if (this.player2.x <= 220) {
      console.log("PLAYER 2 WINS!!!!");
      this.win2 = true
      this.continueGame = false;
    }
  }
}
