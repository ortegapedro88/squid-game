class Doll {
    constructor(ctx) {
  
      this.ctx = ctx;
      this.x = 59;
      this.y = 185;
      this.width = 135;
      this.height = 180;
      this.color = "green"
      this.counter = 0;
      this.sing = false
      this.img = new Image();
      this.img.src = "/images/doll.png";
      this.dollSong = new Audio()
      this.dollSong.src = '/audio/doll_song.mp3'
      this.seconds = 0
      this.intervalId
            
    }

    start(frameNumber){
      if(frameNumber < 1){
      this.intervalId = setInterval(() => {
        this.seconds++;
      }, 1000);}

    }

    move(){

      if( this.seconds % 5 === 0 ){this.color = "red"
      
      this.sing = false}
        
      if( this.seconds % 10 === 0 ){this.color = "green";
      this.dollSong.play()
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