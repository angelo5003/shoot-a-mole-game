class Mole {
  constructor(randomCoordinate, moleImg) {
    this.moleWidth = 90;
    this.moleHeight = 90;
    this.moleImg = moleImg;

    this.x = randomCoordinate.x;
    this.y = randomCoordinate.y;
    this.birthOfMole = frameCount;
    this.moleLife = random(60 * 1, 60 * 1);
    this.moleCoordinates = [];
  }

  //1. draw the mole
  drawMole() {
    image(this.moleImg, this.x, this.y, this.moleWidth, this.moleHeight);
    if (this.birthOfMole + this.moleLife <= frameCount) {
      this.shouldDisappear = true;
    }
  }
}
