class Player {
  constructor(column, row) {
    this.column = column; // y-axis
    this.row = row; // x-axis
    this.left = 340;
    this.top = 420;
    this.width = 50;
    this.height = 50;
  }

  //1.draw player
  drawPlayer() {
    push();
    fill("red");
    rect(this.left, this.top, this.width, this.height);
    pop();
  }
  //2.player need to move sideways with keyIsDown
  //3. player need to shoot bullets to the digletss
}
