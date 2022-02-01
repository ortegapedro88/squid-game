class Game{
    
        constructor(ctx, field, player1, player2, bullet1,bullet2,bullet3,bullet4, doll){
            this.ctx = ctx;
          //  this.background = background;
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
            this.seconds = 0
            
    }
    init(){
        this.ctx.canvas.width = 1200;
        this.ctx.canvas.height = 550;
        this.continueGame = true;
        setInterval(() => {this.seconds ++
            
        }, 1000);
        this.start()
    }
    
    start(){
        this.frameNumber += 1;
        this.doll.start(this.frameNumber)
        this.move();
        this.checkGameOver();
        this.checkWin();
        player1.checkCollisions();
        player2.checkCollisions();
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.draw();
        if (this.continueGame) requestAnimationFrame(this.start.bind(this));
    }

    move(){
        this.player1.move(this.frameNumber)
        this.player2.move(this.frameNumber)
        //this.background.move(this.frameNumber)
        this.bullet1.move(this.frameNumber)
        this.bullet2.move(this.frameNumber)
        this.bullet3.move(this.frameNumber)
        this.bullet4.move(this.frameNumber)
        this.doll.move(this.seconds)
        }
    
    draw(){
        //this.background.draw()
        this.player2.draw()
        this.player1.draw()
        this.bullet1.draw()
        this.bullet2.draw()
        this.bullet3.draw()
        this.bullet4.draw()
        this.field.draw()
        this.doll.draw()
       
        
        
        // this.bullet.draw()

    }

    checkGameOver(){
        if(player1.gOver && player2.gOver){console.log("DEAD MADAFAKAS")
        this.continueGame = false;
        }
    }

    checkWin(){
        if(this.player1.x <= 220){console.log("PLAYER 1 WINS!!!!")}
        if(this.player2.x <= 220){console.log("PLAYER 2 WINS!!!!")}
    }
    
}