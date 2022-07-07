class SplashScreen {
  constructor() {
    this.width = 400;
    this.height = 300;
  }
  drawSplashScreen() {
    background(0); // black
    stroke(0, 255, 0); // green
    noFill();
    strokeWeight(3);

    rect(this.width / 2, this.height / 2, this.width, this.height);

    noStroke();
    // Title of the splashscreen
    push();
    fill(0, 255, 0);
    textSize(20);
    textFont(titleFont);
    text("Whack a Diglett", this.width / 2, 50);
    textSize(12);
    text("Programmed by Tony, Ironhack June 2022", this.width / 2, 110);

    // instructions to play

    textSize(20);
    textFont(bodyFont);
    text(" How to play", this.width / 2, 210);
    textSize(10);
    text(" Hold left or right arrow key to move", this.width / 2, 250);
    text(" Press spacebar to laser beams", this.width / 2, 288);

    text(" Hit as many digletts as you can", this.width / 2, 320);
    text(" in 15 seconds", this.width / 2, 333);

    text(" Click on the screen to begin", this.width / 2, 380);

    pop();
  }
}
