class Player {
  constructor(img) {
    this.moveHorizontal = 340; // horizontal-movement of player, also called(x-axis of the canvas)
    this.moveVertical = 500; // vertical-movement of player, also called (y-axis of the canvas)
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
    rect(this.moveHorizontal, this.top, this.width, this.height);
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
      this.moveHorizontal += 5;
      if (this.moveHorizontal >= 700) {
        this.moveHorizontal = 700;
      }
    } else if (keyIsDown(ARROW_LEFT)) {
      this.moveHorizontal -= 5;
      if (this.moveHorizontal < 0) {
        this.moveHorizontal = 0;
      }
    }
  }

  //4. shoot/add bullet to the bullet array
  shootBullet() {
    this.bulletArray.push(
      new Bullets(this.moveHorizontal + 18, this.moveVertical - 85)
    );
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
