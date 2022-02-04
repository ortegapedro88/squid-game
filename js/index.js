const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let moveSpeed = 0.8;
let onePlayerGame = false;
let twoPlayersGame = false;

let introSong = new Audio("./audio/intro.mp3");

const mainPage = document.getElementById("main_page");

mainPage.onclick = function () {
  introSong.play();
};
canvas.onclick = function () {
  if (!game.continueGame) {
    // restart game
    
    game.init();
  }
};

const onePlayerClick = document.getElementById("onePlayer");
const twoPlayersClick = document.getElementById("twoPlayers");

onePlayerClick.onclick = function () {
  console.log("1player");
  mainPage.remove();
  game.onePlayerGame = true;
  game.init();
  introSong.currentTime = 100;
};

twoPlayersClick.onclick = function () {
  console.log("2player");
  mainPage.remove();
  twoPlayersGame = true;
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

document.addEventListener("keydown", function (event) {
  const key = event.key;

  switch (event.key) {
    case "ArrowLeft":
      arrowLeft = true;
      break;
    case "ArrowRight":
      arrowRight = true;

      break;
    case "ArrowUp":
      arrowUp = true;

      break;
    case "ArrowDown":
      arrowDown = true;

      break;
    case "a":
      keyA = true;
   
      break;
    case "d":
      keyD = true;
   
      break;
    case "w":
      keyW = true;
    
      break;
    case "s":
      keyS = true;
  
      break;
  }
});

document.addEventListener("keyup", function (event) {
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


function keyboardLoop() {
  if (arrowLeft && !player1.gOver) {
    player1.x -= moveSpeed * player1.tl// * player1.tPL;
  }
  if (arrowRight && !player1.gOver) {
    player1.x += moveSpeed * player1.tr//*player1.tPR;
  }
  if (arrowUp && !player1.gOver) {
    player1.y -= moveSpeed * player1.tu//*player1.tPU;
  }
  if (arrowDown && !player1.gOver) {
    player1.y += moveSpeed * player1.td//*player1.tPD;
  }
  if (keyA && !player2.gOver) {
    player2.x -= moveSpeed * player2.tl;
  }
  if (keyD && !player2.gOver) {
    player2.x += moveSpeed * player2.tr;
  }
  if (keyW && !player2.gOver) {
    player2.y -= moveSpeed * player2.tu;
  }
  if (keyS && !player2.gOver) {
    player2.y += moveSpeed * player2.td;
  }
  requestAnimationFrame(this.keyboardLoop.bind(this));
}

keyboardLoop();

const player1 = new Player(ctx, 1100, 150, 15, 30, "rgb(10, 10, 230)", "1");
const player2 = new Player(ctx, 1100, 370, 15, 30, "rgb(220, 15, 15)", "2");
const background = new Background(ctx);
const bullet1 = new Bullet(ctx, 876, 550, 90, 90, "up"); // ctx, x, y,width,height, direction
const bullet2 = new Bullet(ctx, 745, 0, 90, 90, "down"); // ctx, x, y,width,height, direction
const bullet3 = new Bullet(ctx, 629, 51, 75, 75, "round"); // ctx, x, y,width,height, direction
const bullet4 = new Bullet(ctx, 384, 423, 75, 75, "round"); // ctx, x, y,width,height, direction
const field = new Field(ctx);
const doll = new Doll(ctx);
const game = new Game(ctx, field, player1, player2, bullet1, bullet2, bullet3, bullet4, doll, background, onePlayerGame, twoPlayersGame);


