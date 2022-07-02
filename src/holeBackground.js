class BackgroundHole {
  constructor() {
    this.top = 170;
    this.left = 375;
    this.width = 400;
    this.height = 300;
  }
  preload() {
    this.backgroundHole = loadImage("assets/images/diglett_holes.png");
  }
  drawHole() {
    imageMode(CENTER);
    image(this.backgroundHole, this.left, this.top, this.width, this.height);
  }
}
