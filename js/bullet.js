class Bullet {
  constructor(ctx, x, y, width, height, direction) {
    this.ctx = ctx;
    this.direction = direction;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = "./images/ball_sprite.png";
    this.spriteColumns = 8;
    this.spriteRows = 1;
    this.spriteCol = 0;
    this.spriteRow = 0;
  }

  setSpriteFrame(frameNumber) {
    if (frameNumber % 10 === 0) {
      this.spriteCol += 1;
    }

    if (this.spriteCol >= this.spriteColumns) {
      this.spriteCol = 0;
    }
  }

  move(frameNumber) {
    if (this.direction === "up") {
      this.y -= 1.5;
      if (this.y < -50) {
        this.y = 550;
      }
    }

    if (this.direction === "down") {
      this.y += 1.3;
      if (this.y > 550) {
        this.y = 0;
      }
    }

    if (this.direction === "round") {
      if (this.x > 383 && this.y === 51) {
        this.x -= 1.5;
      }
      if (this.x <= 383) {
        this.y += 1.5;
      }
      if (this.y === 423) {
        this.x += 1.5;
      }
      if (this.x >= 630) {
        this.y -= 1.5;
      }
    }
  }

  draw(frameNumber) {
    this.ctx.drawImage(
      this.img,
      350 * this.spriteCol, // the x-axis coordinate in the destination canvas
      0,
      350,
      350,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.setSpriteFrame(frameNumber);
  }
}
