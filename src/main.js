const game = new Game(PLAYER_WIDTH, PLAYER_HEIGHT);

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  background("orange");
  game.play();
}

function preload() {
  game.preload();
}
