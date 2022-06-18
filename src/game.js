class Game {
  constructor() {}

  drawGrid() {
    background("orange");
    for (let x = 0; x <= WIDTH; x += WIDTH / 6) {
      for (let y = 0; y <= HEIGHT; y += HEIGHT / 5) {
        stroke(0);
        strokeWeight(2);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }
  }
}
