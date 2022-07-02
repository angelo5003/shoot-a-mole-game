class GameOver {
  constructor() {
    this.width = 350;
    this.height = 300;
  }
  drawGameOverScreen() {
    background(0); // black background
    noFill();
    strokeWeight(3);
    rect(this.width / 2, this.height / 2, this.width, this.height);
    noStroke();
    fill(0, 255, 0);
    textSize(40);
    text("Time is up", this.width / 2, 200);
    textSize(15);
    text("Your time is up, refresh to play again", this.width / 2, 230);
  }
}
