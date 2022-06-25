class Mole {
  constructor(randomCoordinate) {
    this.moleImg = this.moleImg;
    this.x = randomCoordinate.x;
    this.y = randomCoordinate.y;
    this.birthOfMole = frameCount;
    this.moleLife = random(60 * 1, 60 * 1);
    this.moleCoordinates = [];
  }

  //1. pre-load image of mole
  preload() {
    this.moleImg = loadImage("assets/diglett_without_background.png");
  }

  //2. draw the mole
  drawMole() {
    // image(this.moleImg, this.x, this.y, 50, 50);
    rect(this.x, this.y, 50, 50);
    if (this.birthOfMole + this.moleLife <= frameCount) {
      this.shouldDisappear = true;
    }
  }
}
