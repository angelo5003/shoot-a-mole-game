class Background {
  constructor() {
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
  }
  preload() {
    this.background = loadImage("assets/images/forest_background_resized.jpeg");
  }

  drawBackground() {
    image(this.background, 380, 200, 760, 600);
  }
}
