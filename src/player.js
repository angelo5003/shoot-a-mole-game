class Player {
  constructor(img, bullet) {
    // this.column = 340; // y-axis
    this.column = 340; // y-axis
    this.row = 0; // x-axis
    this.top = 420;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
    this.img = img;
    this.bullet = bullet;
    this.bulletArray = [];
  }

  //1. image of player
  preload() {
    this.img = loadImage("assets/angry_gnome_transparent.png");
  }

  //2.draw player
  drawPlayer() {
    push();
    fill("red");
    rect(this.column, this.top, this.width, this.height);
    // image(this.img, this.left, this.top, this.width, this.height);
    pop();
    this.playerMove();
  }

  //3.player need to move sideways with keyIsDown
  playerMove() {
    if (keyIsDown(ARROW_RIGHT)) {
      this.column += 5;
      if (this.column >= 700) {
        this.column = 700;
      }
    } else if (keyIsDown(ARROW_LEFT)) {
      this.column -= 5;
      if (this.column < 0) {
        this.column = 0;
      }
    }
  }

  //4. shoot the bullet
  shootBullet() {
    this.bulletArray.push(new Bullets());
  }

  //5. player need to shoot bullets to the digletss.
  keyPressed() {
    if (keyCode === SPACE_BAR) {
      console.log("Im shooting");
      this.shootBullet();
    }
  }
}
