class Player {
  constructor(ctx, x, y, width, height, color, name) {

    this.ctx = ctx;
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.tl = 1
    this.tr = 1
    this.td = 1
    this.tu = 1
    this.gOver = false
    this.walking = false
    this.stillPosition = []
    this.name = name
    this.img = new Image();
    this.img.src = "./images/ashes.png";
    this.gOverDoll = false
    this.audio1 = new Audio();
    this.audio1.src = './audio/boom_headshot1.mp3'
    this.audio2 = new Audio();
    this.audio2.src = './audio/boom_headshot2.mp3'
   
    
    
  }
  move(){
    
    if(doll.sing){
      this.stillPosition = []
      
    }

    if(!doll.sing){this.stillPosition.push([this.x,this.y])
      for(let i = 0; i< this.stillPosition.length-1; i++){
      if(this.stillPosition[i][0] != this.stillPosition[i+1][0] || this.stillPosition[i][1] != this.stillPosition[i+1][1]){this.gameOverDoll()
      this.stillPosition = []}
    }
      }
    
    
    }

  checkCollisions(frameNumber) {
    
  
if(this.name === "1"){

    var playerCheckArr = this.ctx.getImageData(this.x-1, this.y-1, this.width+2, this.height+2);
    
    if(playerCheckArr.data[4] === 53 || playerCheckArr.data[60] === 53 || playerCheckArr.data[4] === 220 || playerCheckArr.data[60] === 220  ){this.tu = 0}
    else this.tu = 1//up
    if(playerCheckArr.data[68] === 53 || playerCheckArr.data[2040] === 53 || playerCheckArr.data[68] === 220 || playerCheckArr.data[2040] === 220 ){this.tl = 0}//left
    else this.tl = 1
    if(playerCheckArr.data[132] === 53 || playerCheckArr.data[2104] === 53 || playerCheckArr.data[132] === 220 || playerCheckArr.data[2104] === 220 ){this.tr = 0}//right
    else this.tr = 1
    if(playerCheckArr.data[2112] === 53 || playerCheckArr.data[2168] === 53 || playerCheckArr.data[2112] === 220 || playerCheckArr.data[2168] === 220){this.td = 0}//down
    else this.td = 1
}
 
    if(this.name === "2"){
    var playerCheckArr = this.ctx.getImageData(this.x, this.y, this.width, this.height);
    
    if(playerCheckArr.data[24] === 53 || playerCheckArr.data[8] === 53 || playerCheckArr.data[40] === 230 || playerCheckArr.data[4] === 10 || playerCheckArr.data[56] === 10){this.tu = 0}
    else this.tu = 1//up
    if(playerCheckArr.data[900] === 53 || playerCheckArr.data[240] === 53 || playerCheckArr.data[1500] === 53 || playerCheckArr.data[60] === 10 || playerCheckArr.data[1680] === 10  ){this.tl = 0}//left
    else this.tl = 1
    if(playerCheckArr.data[897] === 53 || playerCheckArr.data[237] === 53 || playerCheckArr.data[1497] === 53 || playerCheckArr.data[30] === 10 || playerCheckArr.data[435] === 10 ){this.tr = 0}//right
    else this.tr = 1
    if(playerCheckArr.data[1764] === 53 || playerCheckArr.data[1756] === 53 || playerCheckArr.data[1780] === 53 || playerCheckArr.data[1744] === 10 || playerCheckArr.data[1792] === 10){this.td = 0}//down
    else this.td = 1
}




    for (var i = 0; i < playerCheckArr.data.length ; i += 4) {
      if ( playerCheckArr.data[i] === 255 && playerCheckArr.data[i+1] === 0 &&  playerCheckArr.data[i+2] === 0) {
         console.log("DEAD MADAFAKA");// si lo toca una bola
         this.gameOver()
    }
}
}
  draw() {
    
   // if(this.deathCount === 3){this.realDeath = true}
    if(!this.gOver){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 25px sans-serif";
    this.ctx.fillText(this.name, this.x+this.width/2, this.y+this.height*0.8);}
    if(this.gOver){
      this.ctx.drawImage(this.img ,this.x, this.y, 35, 35)
    }
    
    
    
    
  }

  laserDraw(){
    if(this.gOverDoll){
      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgb(240,0,0)";
      this.ctx.moveTo(doll.x+40, doll.y+80);
      this.ctx.lineTo(this.x+this.width/2, this.y+this.height/2);
      this.ctx.stroke(); 
      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgb(240,0,0)";
      this.ctx.moveTo(doll.x+95, doll.y+80);
      this.ctx.lineTo(this.x+this.width/2, this.y+this.height/2);
      this.ctx.stroke(); 
      if(player1.gOverDoll && !player2.gOverDoll)this.audio1.play(); 
      if(player2.gOverDoll && !player1.gOverDoll)this.audio1.play();
      if(player2.gOver && player1.gOver)this.audio2.play();
      
      setTimeout(() => {
        this.gOverDoll = false
      }, 400);
      
    }
  
  }

  
  gOverBoard(){
    if(this.gOver){
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.font = "bold 25px sans-serif";
      this.ctx.fillText(
      `Player ${this.name}`,
      545,
      225
    )
    this.ctx.fillText(
      `go home`,
      545,
      255
    )
    this.ctx.font = "bold 40px sans-serif"
    this.ctx.fillText(
      `NOOB!!!`,
      545,
      300
    )
    }
  }

  gameOver(){
   
    this.gOver = true;
    
  }

  gameOverDoll(){
    
    this.gOver = true;  
    this.gOverDoll = true
 

  }
  
}
