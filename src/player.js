class Player {
  constructor() {
    this.moveHorizontal = 340; // horizontal-movement of player, also called(x-axis of the canvas)
    this.moveVertical = 500; // vertical-movement of player, also called (y-axis of the canvas)
    this.top = 400;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
    this.img = this.img;
    this.bulletArray = [];
  }

  //1. image of player
  preload() {
    this.img = loadImage("assets/angry_gnome_transparent.png");
    this.bulletImg = loadImage("assets/bullet.png");
  }

  //2.draw player
  drawPlayer() {
    push();
    fill("red");
    // rect(this.moveHorizontal, this.top, this.width, this.height);
    image(this.img, this.moveHorizontal, this.top, this.width, this.height);
    pop();
    this.playerMove();

    //2.1 create the bullet in the drawPlayer
    this.bulletArray.forEach((bullet) => {
      bullet.drawLoadBullet();
    });
    //2.2 remove the bullets from the array as soon as they leave the canvas
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

  //4. player need to shoot bullets to the digletss.
  keyPressed() {
    if (keyCode === SPACE_BAR) {
      console.log("Im shooting");
      this.shootBullet();
    }
  }

  //5. shoot/add bullet to the bullet array
  shootBullet() {
    this.bulletArray.push(
      new Bullets(
        this.moveHorizontal + 18,
        this.moveVertical - 85,
        this.bulletImg
      )
    );
  }

  //6. remove fired bullets
  removeBullets() {
    this.bulletArray = this.bulletArray.filter(
      (bullet) => bullet.row && bullet.column <= CANVAS_WIDTH
    );
  }
}
