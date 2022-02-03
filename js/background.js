class Background {
  constructor(ctx) {
    this.img = new Image();
    this.img.src = "./images/c0.png";
    this.spriteColumns = 5;
    this.spriteRows = 1;
    this.spriteCol = 0;
    this.spriteRow = 0;
    this.ctx = ctx
    this.img1 = new Image()
    this.img1.src = "./images/soldier_triang.png"
    this.img2 = new Image()
    this.img2.src = "./images/soldier_square.png"
    this.img3 = new Image()
    this.img3.src = "./images/pipe_down_fix.png"
    this.img4 = new Image()
    this.img4.src = "./images/pipe_up_fix.png"
   
  }

  setSpriteFrame(frameNumber) {
    if (frameNumber % 10 === 0) {
      this.spriteCol += 1;
    }

    if (this.spriteCol >= this.spriteColumns) {
      this.spriteCol = 0;
    }
  }

  draw() {
    
    this.ctx.drawImage(this.img1,83,55,87,120);
    this.ctx.drawImage(this.img2,83,375,87,120);
    
    
    for(let i = 0 ; i < 14;i++){
      this.ctx.drawImage(this.img,200 * this.spriteCol,0,200,65,i*87,0,87,47);
      this.ctx.drawImage(this.img,200 * this.spriteCol,0,200,65,i*87,503,87,47);
      this.ctx.drawImage(this.img,200 * this.spriteCol,0,200,65,-40,(i+1)*47,87,47);
      this.ctx.drawImage(this.img,200 * this.spriteCol,0,200,65,1152,(i+1)*47,87,47);
    }

    this.ctx.fillStyle = "rgb(53, 53, 53)";// color gris
    this.ctx.fillRect(709, 500, 293 , 55) 
    this.ctx.fillRect(709, 0, 293 , 50) 
    
    this.ctx.drawImage(this.img3,875,495,92,120);
    this.ctx.drawImage(this.img4,875,-65,92,120);
    this.ctx.drawImage(this.img3,744,495,92,120);
    this.ctx.drawImage(this.img4,744,-65,92,120);
    
    

  }
}
