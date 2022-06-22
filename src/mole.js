class Mole {
  constructor() {
    this.width = 300;
    this.height = 100;
  }

  //1. draw the hole and the moles
  drawMole() {
    push();
    fill("black");
    this.drawHoles();
    pop();
  }
  // 2.create a hole where the digletts are hiding
  drawHoles() {
    translate(this.width / 1.5, this.height / 4); // with the width value of 300

    for (let x = 0; x <= this.width; x = x += 150) {
      circle(x, 50, 65, 50); // top holes
      circle(x, 150, 65, 50); // middle holes
      circle(x, 250, 65, 50); // bottom holes
    } // create holes
  }
}
