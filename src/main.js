const splash = new SplashScreen();
const game = new Game();
const gameOver = new GameOver();

// fonts
let titleFont;
let bodyFont;

// game timer
let totalTime;
let splashTime;
let gameTime;
let timeLimit = 30;

// which function should be running now
//? stage 0 = splashscreen / begin screen
//? stage 1 = game
let stage = 0; // splashscreen / begin screen

function preload() {
  // fonts for the game
  titleFont = loadFont("assets/fonts/Atari_Classic.ttf");
  bodyFont = loadFont("assets/fonts/Atari_Classic_Chunky.ttf");
  // pre-load the game
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
    gameTime = int((totalTime - splashTime) / 1000); // display game time in seconds by divinding the amount of millisecond through 1000
    timerOfGame.innerText = timeLimit - gameTime; // display countdown timer
  }

  if (mouseIsPressed === true) {
    stage = 1;
  }

  if (gameTime >= timeLimit) {
    stage = 2;
    gameOver.drawGameOverScreen();
  } // load the game over screen as soon as the timer is set to 0
}

function keyPressed() {
  game.keyPressed();
}
