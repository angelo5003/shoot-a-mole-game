class Player {
  constructor() {
    this.moveHorizontal = 340; // horizontal-movement of player, also called(x-axis of the canvas)
    this.moveVertical = 500; // vertical-movement of player, also called (y-axis of the canvas)
    this.top = 450;
    this.width = PLAYER_WIDTH;
    this.height = PLAYER_HEIGHT;
    this.img = this.img;
  }

  //1. image of player
  preload() {
    this.img = loadImage("assets/images/angry_gnome_transparent.png");
  }

  //2.draw player
  drawPlayer() {
    push();
    image(this.img, this.moveHorizontal, this.top, this.width, this.height);
    pop();
    this.playerMove();
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
}
