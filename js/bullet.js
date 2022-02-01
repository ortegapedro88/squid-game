class Bullet {
    constructor(ctx, x, y,width,height, direction) {
  
      this.ctx = ctx;
      this.direction = direction
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.img = new Image();
      this.img.src = "/images/1.png";
  
    //   // sprites image definition
    //   this.spriteColumns = 9;
    //   this.spriteRows = 1;
  
    //   //counters to navigate in the image
    //   this.spriteCol = 0;
    //   this.spriteRow = 0;
    //   this.spriteX = 300;
    //   this.spriteY = 300;
            
    // }


    // setSpriteFrame(frameNumber) {
       
      }


    move(frameNumber){

    if(this.direction === "up"){
        this.y -= 1.5;
        if(this.y < -50){this.y = 550}}

    if(this.direction === "down"){
        this.y += 1.3;
        if(this.y > 550){this.y = 0}
    }
    
    if(this.direction === "round"){
       if(this.x > 383 && this.y === 51) {this.x -= 1.5};
       if(this.x <= 383) {this.y +=1.5};
       if(this.y === 423) {this.x += 1.5};
       if(this.x >= 630) {this.y -= 1.5};
       
       
    }
       
       
  }
       // if(this.x < 200){this.x = 680}
    
    
    
    
  

        // if (frameNumber % 10 === 0) {
        //     this.spriteCol += 1;
           
      
        //     if (this.spriteCol >= this.spriteColumns) {
        //       this.spriteCol = 0;
        //       this.spriteRow += 1;

        //       if(this.spriteRow >= this.spriteRows){
        //           this.spriteRow = 0;
        //       }
        //     }
        //      this.spriteX = (this.width * this.spriteCol) // the x of the current sprite in the image
        //      this.spriteY = (this.height * this.spriteRow) // the y of the current sprite in the image
        //   }
      
    
  

    draw() {
          this.ctx.drawImage(
            this.img,
            this.x, // the x-axis coordinate in the destination canvas
            this.y,
            this.width,
            this.height,           
          )
    }
  }
  