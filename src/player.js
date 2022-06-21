class Player {
  constructor(img) {
    this.column = 340; // x-axis
    this.row = 500; // y-axis
    this.top = 420;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
    this.img = img;
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

    this.bulletArray.forEach((bullet) => {
      bullet.loadBullet();
    });

    this.removeBullets();
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

  //4. shoot/add bullet to the bullet array
  shootBullet() {
    this.bulletArray.push(new Bullets(this.column + 18, this.row - 85));
    // this.bulletArray.push(new Bullets(this.column, this.row));
  }

  //5. remove fired bullets
  removeBullets() {
    this.bulletArray = this.bulletArray.filter(
      (bullet) => bullet.row && bullet.column <= CANVAS_WIDTH
      // (bullet) => bullet.row && bullet.column <= CANVAS_WIDTH
    );
  }

  //5. player need to shoot bullets to the digletss.
  keyPressed() {
    if (keyCode === SPACE_BAR) {
      console.log("Im shooting");
      this.shootBullet();
    }
  }
}
