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
    
    
  }
  move(){
    
    if(doll.sing){
      this.stillPosition = []
      
    }

    if(!doll.sing){this.stillPosition.push([this.x,this.y])
      for(let i = 0; i< this.stillPosition.length-1; i++){
      if(this.stillPosition[i][0] != this.stillPosition[i+1][0] || this.stillPosition[i][1] != this.stillPosition[i+1][1]){this.gameOverDoll()}
    }
      }
      //console.log(this.stillPosition)
    
    }

  checkCollisions() {
    var playerCheckArr = this.ctx.getImageData(this.x, this.y, this.width, this.height);

    // console.log(playerCheckArr)

    if(playerCheckArr.data[24] === 53 || playerCheckArr.data[8] === 53 || playerCheckArr.data[40] === 53){this.tu = 0}
    else this.tu = 1//up
    if(playerCheckArr.data[900] === 53 || playerCheckArr.data[240] === 53 || playerCheckArr.data[1500] === 53){this.tl = 0}//left
    else this.tl = 1
    if(playerCheckArr.data[897] === 53 || playerCheckArr.data[237] === 53 || playerCheckArr.data[1497] === 53){this.tr = 0}//right
    else this.tr = 1
    if(playerCheckArr.data[1764] === 53 || playerCheckArr.data[1756] === 53 || playerCheckArr.data[1780] === 53){this.td = 0}//down
    else this.td = 1
    

    for (var i = 0; i < playerCheckArr.data.length ; i += 4) {
      if ( playerCheckArr.data[i] === 255 || playerCheckArr.data[i+1] === 255 ||  playerCheckArr.data[i+2] === 255) {
         console.log("DEAD MADAFAKA");
         this.gameOver()
    }
}
}
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  gameOver(){
    this.gOver = true;
      
  }

  gameOverDoll(){
    this.gOver = true;   
  }
  gameOverDraw(){
  
  }

}

// this.ctx.fillStyle = "blue";
//       this.ctx.fillRect(this.x, this.y, this.width, this.height)

/*
this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, 1, 1)
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x+1, this.y, 1, 1)
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x+2, this.y, 1, 1)
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y+1, 1, 1)
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x+1, this.y+1, 1, 1)
    this.ctx.fillStyle = "orange";
    this.ctx.fillRect(this.x+2, this.y+1, 1, 1)
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y+2, 1, 1)
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x+1, this.y+2, 1, 1)
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x+2, this.y+2, 1, 1)
    */



    
    // for (var i = 0, n = playerCheckArr.data.length; i < n; i += 4) {
    //   var red = playerCheckArr.data[i];
    //   var green = playerCheckArr.data[i + 1];
    //   var blue = playerCheckArr.data[i + 2];
    //   var alpha = playerCheckArr.data[i + 3];
    // //   if (red === 53 && green === 53 && blue === 53) {
    // //     console.log("hit the wall");
    //  // }
    // }