const splash = new SplashScreen();
const game = new Game();

// game timer
let totalTime;
let splashTime;
let gameTime;
let timeLimit = 60;

// which function should be running now
//? stage 0 = splashscreen / begin screen
//? stage 1 = game
let stage = 0; // splashscreen / begin screen

function preload() {
  game.preload();
}

function setup() {
  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  //start clock
  totalTime = millis();

  if (stage === 0) {
    splash.drawSplashScreen();
    // start clock
    splashTime = totalTime;
  }
  if (stage === 1) {
    game.play();
    // stop splash time to save amount of time we are on splash
    splashTime = splashTime;
    gameTime = int((totalTime - splashTime) / 1000); // display game time in seconds
    timerOfGame.innerText = timeLimit - gameTime; // display countdown timer
  }
  if (mouseIsPressed === true) {
    stage = 1;
  }
}

function keyPressed() {
  game.keyPressed();
}
