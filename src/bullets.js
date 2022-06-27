class Bullets {
  constructor(column, row, bulletImg) {
    this.column = column;
    this.row = row;
    this.widthOfBullet = 30;
    this.heightOfBullet = 40;
    this.bulletImg = bulletImg;
  }

  //1. method of building bullet
  drawLoadBullet() {
    image(
      this.bulletImg,
      this.column,
      this.row,
      this.widthOfBullet,
      this.heightOfBullet
    );

    this.row -= 5; // speed of the bullet
  } // as soon as I change the value of -= 5 to 2,4,1 the array will not be cleared. But if I change the value to -=5 or 2.5 the array will be cleared.
}
