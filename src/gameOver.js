class GameOver {
  constructor(scoreOfPlayer) {
    this.width = 250;
    this.height = 300;
    this.highScore = scoreOfPlayer;
  }
  drawGameOverScreen() {
    background(0); // black background
    noFill();
    strokeWeight(3);
    rect(this.width / 2, this.height / 2, this.width, this.height);
    noStroke();
    fill(0, 255, 0);
    textSize(40);
    textFont(titleFont);
    text("Time is up", this.width / 2, 200);
    textSize(15);
    textFont(bodyFont);
    text(
      "Your time is up, refresh the page to play again",
      this.width / 2,
      this.height,
      400
    );
  }
}
