//Canvas:
const CANVAS_WIDTH = 750;
const CANVAS_HEIGHT = 500;

//Player:
const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = PLAYER_WIDTH;

//Player Movement keys:
const ARROW_RIGHT = 39;
const ARROW_LEFT = 37;
const SPACE_BAR = 32;

// Mole dimensions
const MOLE_HEIGHT = 100;
const MOLE_WIDTH = 130;

// Score of Player
const scoreOfPlayer = document.querySelector(".title #score-span #score");
// Timer of the game
const timerOfGame = document.querySelector(".title #time-span #span-timer");

// Sounds of game
let introSound;
let diglettSound;
let outroSound;
