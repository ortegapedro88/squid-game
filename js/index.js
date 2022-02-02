const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.save()
/*



*/

let introSong = new Audio('/audio/intro.mp3');

//let laserSound = new Audio('/audio/boom_headshot.mp3')


const background = new Background(ctx);
const bullet1 = new Bullet(ctx, 876, 550,90,90, "up") // ctx, x, y,width,height, direction
const bullet2 = new Bullet(ctx, 745, 0,90,90, "down") // ctx, x, y,width,height, direction
const bullet3 = new Bullet(ctx, 629, 51,75,75, "round") // ctx, x, y,width,height, direction
const bullet4 = new Bullet(ctx, 384, 423,75,75, "round") // ctx, x, y,width,height, direction
const player1 = new Player(ctx, 1100, 150, 15, 30, "rgb(0, 0, 230)", "1")
const player2 = new Player(ctx, 1100, 370, 15, 30, "rgb(230, 0, 0)", "2")
const field = new Field(ctx)
const doll = new Doll(ctx)
const game = new Game(ctx, field, player1, player2, bullet1, bullet2,bullet3,bullet4,doll,background);

let moveSpeed = 0.8;







const startButton = document.getElementById("start-button");
const mainPage = document.getElementById("main_page")

mainPage.onclick = function () { introSong.play()}
canvas.onclick = function (){if(!game.continueGame)game.init()}

startButton.onclick = function () {
  
  mainPage.remove();
  game.init();
  introSong.currentTime = 100;
};



let arrowLeft = false;
let arrowRight = false;
let arrowUp = false;
let arrowDown = false;
let keyA = false;
let keyS = false;
let keyD = false;
let keyW = false;





document.addEventListener('keydown', function(event) {
    const key = event.key;
  
  switch (event.key) {
    case "ArrowLeft":
        arrowLeft = true;
       // player1.x -= 3*player1.tl*player1.gOver;
        break;
    case "ArrowRight":
        arrowRight = true;
       // player1.x += 3*player1.tr*player1.gOver;
        break;
    case "ArrowUp":
        arrowUp = true;
       // player1.y -= 3*player1.tu*player1.gOver;
        break;
    case "ArrowDown":
        arrowDown = true;
       // player1.y += 3*player1.td*player1.gOver;
        break;
        case "a":
            keyA = true;
         // player2.x -= 3*player2.tl*player2.gOver;
          break;
      case "d":
          keyD = true;
          //player2.x += 3*player2.tr*player2.gOver;
          break;
      case "w":
          keyW = true;
         // player2.y -= 3*player2.tu*player2.gOver;
          break;
      case "s":
          keyS = true;
         // player2.y += 3*player2.td*player2.gOver;
          break;
  }
  });



  document.addEventListener('keyup', function(event) {
    const key = event.key;
  
  switch (event.key) {
    case "ArrowLeft":
        arrowLeft = false;
      //  player1.x -= 3*player1.tl*player1.gOver;
        break;
    case "ArrowRight":
        arrowRight = false;
      //  player1.x += 3*player1.tr*player1.gOver;
        break;
    case "ArrowUp":
        arrowUp = false;
       // player1.y -= 3*player1.tu*player1.gOver;
        break;
    case "ArrowDown":
        arrowDown = false;
        //player1.y += 3*player1.td*player1.gOver;
        break;
        case "a":
            keyA = false;
        case "A":
            keyA = false;
         // player2.x -= 3*player2.tl*player2.gOver;
          break;
      case "d":
          keyD = false;
      case "D":
          keyD = false;
         // player2.x += 3*player2.tr*player2.gOver;
          break;
      case "w":
          keyW = false;
      case "W":
          keyW = false;
         // player2.y -= 3*player2.tu*player2.gOver;
          break;
      case "s":
          keyS = false;
      case "S":
          keyS = false;
        //   player2.y += 3*player2.td*player2.gOver;
          break;
  }
  });

function keyboardLoop(){
    if(arrowLeft && !player1.gOver){player1.x -= moveSpeed*player1.tl;}
    if(arrowRight && !player1.gOver){player1.x += moveSpeed*player1.tr;}
    if(arrowUp && !player1.gOver){player1.y -= moveSpeed*player1.tu;}
    if(arrowDown && !player1.gOver){ player1.y += moveSpeed*player1.td;}
    if(keyA && !player2.gOver){player2.x -= moveSpeed*player2.tl;}
    if(keyD && !player2.gOver){player2.x += moveSpeed*player2.tr;}
    if(keyW && !player2.gOver){player2.y -= moveSpeed*player2.tu;}
    if(keyS && !player2.gOver){ player2.y += moveSpeed*player2.td;}
    requestAnimationFrame(this.keyboardLoop.bind(this))
}

keyboardLoop()




/*

document.addEventListener('keydown', function(event) {
  const key = event.key;

switch (event.key) {
  case "ArrowLeft":
      player1.x -= 3*player1.tl*player1.gOver;
      break;
  case "ArrowRight":
      player1.x += 3*player1.tr*player1.gOver;
      break;
  case "ArrowUp":
      player1.y -= 3*player1.tu*player1.gOver;
      break;
  case "ArrowDown":
      player1.y += 3*player1.td*player1.gOver;
      break;
      case "a":
        player2.x -= 3*player2.tl*player2.gOver;
        break;
    case "d":
        player2.x += 3*player2.tr*player2.gOver;
        break;
    case "w":
        player2.y -= 3*player2.tu*player2.gOver;
        break;
    case "s":
        player2.y += 3*player2.td*player2.gOver;
        break;
}
});

*/

// var game = {
//     "pup": {
//       "tag": document.getElementById('pup'),
//       "startX": window.innerWidth/4 - 100/2,
//       "startY": window.innerHeight/2 - 100/2,
//       "x": window.innerWidth/4 - 100/2,
//       "y": window.innerHeight/2 - 100/2,
//       "score": 0,
//       "controls": {
//         "up": false,
//         "right": false,
//         "down": false,
//         "left": false,
//         "fire": false,
//       },
//     },
//     "doggo": {
//       "tag": document.getElementById('doggo'),
//       "startX": (window.innerWidth/4)*3 - 100/2,
//       "startY": window.innerHeight/2 - 100/2,
//       "x": (window.innerWidth/4)*3 - 100/2,
//       "y": window.innerHeight/2 - 100/2,
//       "score": 0,
//       "controls": {
//         "up": false,
//         "right": false,
//         "down": false,
//         "left": false,
//         "fire": false,
//       },
//     },
//   }
  
//   // Keyboard Control
//   document.addEventListener('keydown',press)
//   function press(e){
//     // Pup keys
//     if (e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
//       game.player2.controls.up = true
//     }
//     if (e.keyCode === 68 /* d */){
//       game.player2.controls.right = true
//     }
//     if (e.keyCode === 83 /* s */){
//       game.player2.controls.down = true
//     }
//     if (e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
//       game.player2.controls.left = true
//     }
//     // Doggo keys
//     if (e.keyCode === 38 /* up */){
//       game.player1.controls.up = true
//     }
//     if (e.keyCode === 39 /* right */){
//       game.player1.controls.right = true
//     }
//     if (e.keyCode === 40 /* down */){
//       game.player1.controls.down = true
//     }
//     if (e.keyCode === 37 /* left */){
//       game.player1.controls.left = true
//     }
//   }
//   document.addEventListener('keyup',release)
//   function release(e){
//     // Pup keys
//     if (e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
//       game.pup.controls.up = false
//     }
//     if (e.keyCode === 68 /* d */){
//       game.pup.controls.right = false
//     }
//     if (e.keyCode === 83 /* s */){
//       game.pup.controls.down = false
//     }
//     if (e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
//       game.pup.controls.left = false
//     }
//     // Doggo keys
//     if (e.keyCode === 38 /* up */){
//       game.player1.controls.up = false
//     }
//     if (e.keyCode === 39 /* right */){
//       game.player1.controls.right = false
//     }
//     if (e.keyCode === 40 /* down */){
//       game.player1.controls.down = false
//     }
//     if (e.keyCode === 37 /* left */){
//       game.player1.controls.left = false
//     }
//   }
//   function loop(){
//     // Pup movement
//     if (game.player2.controls.up){
//       game.player2.y = Math.max(game.pup.y - 10, 0)
//     }
//     if (game.player2.controls.right){
//       game.player2.x = Math.min(game.pup.x + 10, window.innerWidth-100)
//     }
//     if (game.player2.controls.down){
//       game.player2.y = Math.min(game.pup.y + 10, window.innerHeight-100)
//     }
//     if (game.player2.controls.left){
//       game.player2.x = Math.max(game.pup.x - 10, 0)
//     }
//     game.player2.tag.style.left = game.pup.x+'px'
//     game.player2.tag.style.top = game.pup.y+'px'
  
//     // Doggo movement
//     if (game.player1.controls.up){
//       game.player1.y = Math.max(game.doggo.y - 10, 0)
//     }
//     if (game.player1.controls.right){
//       game.player1.x = Math.min(game.doggo.x + 10, window.innerWidth-100)
//     }
//     if (game.player1.controls.down){
//       game.player1.y = Math.min(game.doggo.y + 10, window.innerHeight-100)
//     }
//     if (game.player1.controls.left){
//       game.player1.x = Math.max(game.doggo.x - 10, 0)
//     }
//     game.player1.tag.style.left = game.doggo.x+'px'
//     game.player1.tag.style.top = game.doggo.y+'px'
  
//     window.requestAnimationFrame(loop)
//   }
//   window.requestAnimationFrame(loop)