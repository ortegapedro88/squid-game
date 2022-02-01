class Doll {
    constructor(ctx, dollSong) {
  
      this.ctx = ctx;
      this.x = 80;
      this.y = 200;
      this.width = 100;
      this.height = 150;
      this.color = "green"
      this.counter = 0;
      this.dollSong = dollSong
      this.sing = false

            
    }

    start(frameNumber){

    }
    move(seconds){

      if( seconds % 5 === 0 ){this.color = "red"
      this.dollSong.play()
    this.sing = false}
        
      if( seconds % 10 === 0 ){this.color = "green";
    this.sing = true}

    // console.log(this.sing)
      
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    gameOver(){
     
    }
  
  }