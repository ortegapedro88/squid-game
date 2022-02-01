class Doll {
    constructor(ctx, dollSong) {
  
      this.ctx = ctx;
      this.x = 59;
      this.y = 185;
      this.width = 135;
      this.height = 180;
      this.color = "green"
      this.counter = 0;
      this.dollSong = dollSong
      this.sing = false
      this.img = new Image();
      this.img.src = "/images/doll.png";
            
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

      this.ctx.drawImage(this.img ,this.x, this.y, this.width, this.height)
    }
  
    gameOver(){
     
    }
  
  }