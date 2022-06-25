class Bullets {
  constructor(column, row) {
    this.column = column;
    this.row = row;
    this.bulletImg = this.bulletImg;
  }
  // 1. pre-load image of bullet
  preload() {
    this.bulletImg = loadImage("assets/bullet.png");
  }

  //2. method of building bullet
  loadBullet() {
    rect(this.column, this.row, 12, 12);

    // image(this.bulletImg, this.column, this.row, 12, 12);

    this.row -= 5;
  } // as soon as I change the value of -= 5 to 2,4,1 the array will not be cleared. But if I change the value to -=5 or 2.5 the array will be cleared.
}
