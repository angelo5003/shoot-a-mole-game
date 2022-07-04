class Bullets {
  constructor(bulletLeft, bulletTop, bulletImg) {
    this.bulletLeft = bulletLeft; // x-axis of bullet
    this.bulletTop = bulletTop; // y-axis of bullet
    this.widthOfBullet = 30;
    this.heightOfBullet = 40;

    this.bulletImg = bulletImg;
  }

  //1. method of building bullet
  drawBullet() {
    image(
      this.bulletImg,
      this.bulletLeft,
      this.bulletTop,
      this.widthOfBullet,
      this.heightOfBullet
    );

    this.bulletTop -= 5; // speed of bullet
  } // as soon as I change the value of -= 5 to 2,4,1 the array will not be cleared. But if I change the value to -=5 or 2.5 the array will be cleared.
}
