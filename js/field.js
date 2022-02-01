class Field{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 50;
        this.y = 50;
        }

    draw(){

        this.ctx.fillStyle = "rgb(238, 200, 156)";// background color
        this.ctx.fillRect(0, 0, 1200, 50)// franja arriba
        this.ctx.fillRect(0, 500, 1200, 50) //franja abajo
       

        this.ctx.beginPath()
        this.ctx.fillStyle = "violet";
        this.ctx.fillRect(200, 50, 20, 450) // linea de llegada
        this.ctx.closePath()

        this.ctx.strokeStyle = "rgb(53, 53, 53)";
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(this.x, this.y, 1100, 450) //borde del campo
       
        
        
        this.ctx.fillStyle = "rgb(53, 53, 53)";// color gris
        this.ctx.fillRect(349, 50, 30, 160)  //primer obs
        this.ctx.fillRect(349, 340, 30, 160) // primer obs

        this.ctx.fillRect(460, 175, 170, 200) // isla
        this.ctx.fillRect(460, 125, 30, 300) // isla
        this.ctx.fillRect(600, 125, 30, 300) // isla

        this.ctx.fillRect(709, 50, 30, 160)  // tercer obs
        this.ctx.fillRect(709, 340, 30, 160) // tercer obs

        this.ctx.fillRect(840, 125, 30, 300) // cuarto obs

        this.ctx.fillRect(970, 50, 30, 160)  // tercer obs
        this.ctx.fillRect(970, 340, 30, 160) // tercer obs

        // this.ctx.fillStyle = "rgb(238, 200, 156)";// background color
        // this.ctx.fillRect(490, 125, 110, 50) //guarida arriba
        // this.ctx.fillRect(490, 375, 110, 50) //guarida arriba

       
        }
    
    
}