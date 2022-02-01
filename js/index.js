const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
/*

const background = new Background(ctx);

*/

let introSong = new Audio('/audio/intro.mp3');
let dollSong = new Audio('/audio/doll_song.mp3')


const bullet1 = new Bullet(ctx, 878, 550,87,87, "up") // ctx, x, y,width,height, direction
const bullet2 = new Bullet(ctx, 748, 0,87,87, "down") // ctx, x, y,width,height, direction
const bullet3 = new Bullet(ctx, 629, 51,75,75, "round") // ctx, x, y,width,height, direction
const bullet4 = new Bullet(ctx, 384, 423,75,75, "round") // ctx, x, y,width,height, direction
const player1 = new Player(ctx, 1100, 150, 15, 30, "rgb(0, 0, 230)", "Player 1")
const player2 = new Player(ctx, 1100, 370, 15, 30, "rgb(230, 0, 0)", "Player 2")
const field = new Field(ctx)
const doll = new Doll(ctx, dollSong)
const game = new Game(ctx, field, player1, player2, bullet1, bullet2,bullet3,bullet4,doll);







const startButton = document.getElementById("start-button");
const mainPage = document.getElementById("main-page")

mainPage.onclick = function () { introSong.play()}

startButton.onclick = function () {
  console.log("start")
  mainPage.remove();
  game.init();
  introSong.currentTime = 100;
};

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
