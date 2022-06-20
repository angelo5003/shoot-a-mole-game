class Bullets {
  constructor(column, row) {
    this.column = column;
    this.row = row;
  }
  loadBullet() {
    rect(this.column, this.row, 40, 40);
    this.row -= 2;
  }
}
