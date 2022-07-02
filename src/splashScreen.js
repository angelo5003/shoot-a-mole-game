class SplashScreen {
  constructor() {
    this.width = 350;
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
    fill(0, 255, 0);
    textSize(40);
    text("Whack a Diglett", this.width / 2, 100);
    textSize(15);
    text("Programmed by Tony, Ironhack June 2022", this.width / 2, 130);

    // instructions to play
    textSize(40);
    text("How to play", this.width / 2, 250);
    textSize(15);
    text("Press left and right arrow keys to move", this.width / 2, 290);
    text("Press spacebar to fire bullets", this.width / 2, 320);
    text("Hit as many digletts as you can in 60 seconds", this.width / 2, 350);
    text("Click the screen to begin", this.width / 2, 420);
  }
}
