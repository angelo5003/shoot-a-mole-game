const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.play();
}

function keyPressed() {
  game.keyPressed();
}
