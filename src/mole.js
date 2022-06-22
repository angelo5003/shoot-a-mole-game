class Mole {
  constructor() {
    this.width = 300;
    this.height = 100;
  }

  //1. draw the hole and the moles
  drawMole() {
    this.drawHoles();
  }
  // 2.create a hole where the digletts are hiding
  drawHoles() {
    translate(this.width / 1.5, this.height / 4); // with the width value of 300

    for (let x = 0; x <= this.width; x = x += 100) {
      circle(x, 50, 50, 50);
      circle(x, 150, 50, 50);
      circle(x, 250, 50, 50);
    }
  }
}
