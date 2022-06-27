class Mole {
  constructor(randomCoordinate) {
    // this.moleImg = this.moleImg;
    this.x = randomCoordinate.x;
    this.y = randomCoordinate.y;
    this.moleWidth = 50;
    this.moleHeight = 50;
    this.birthOfMole = frameCount;
    this.moleLife = random(60 * 1, 60 * 1);
    // this.moleCoordinates = [];
  }

  //1. pre-load image of mole
  preload() {
    this.moleImg = loadImage("assets/diglett_without_background.png");
  }

  //2. draw the mole
  drawMole() {
    // image(this.moleImg, this.x, this.y, this.moleWidth, this.moleHeight);
    rect(this.x, this.y, this.moleWidth, this.moleHeight);
    if (this.birthOfMole + this.moleLife <= frameCount) {
      this.shouldDisappear = true;
    }
  }
}
