class Game {
  constructor() {
    this.player = new Player();
    this.mole = [];
    this.bullet = new Bullets();
    this.backgroundHole = new BackgroundHole();
    this.gameBackground = new Background();
    this.holeCoordinates = [
      // Left column circle coords
      {
        x: 192,
        y: 20,
      },
      {
        x: 192,
        y: 125,
      },
      {
        x: 192,
        y: 225,
      },
      // Middle column circle coords
      {
        x: 330,
        y: 20,
      },
      {
        x: 330,
        y: 125,
      },
      {
        x: 330,
        y: 225,
      },
      // Right column circle coords
      {
        x: 480,
        y: 20,
      },
      {
        x: 480,
        y: 125,
      },
      {
        x: 480,
        y: 225,
      },
    ];
    this.score = 0;
    this.bulletArray = [];
    console.log(this.bulletArray);
  }

  //1. preload images etc
  preload() {
    this.gameBackground.preload();
    this.backgroundHole.preload();
    this.bulletImg = loadImage("assets/bullet.png");
    this.player.preload();
  }
  //2. everything that is related to play the game
  play() {
    this.gameBackground.drawBackground();
    this.backgroundHole.drawHole();
    this.player.drawPlayer();

    // 3. random method to show and hide the mole on the holes
    if (frameCount % 75 === 0) {
      this.mole.push(
        new Mole(
          this.holeCoordinates[
            Math.floor(random(0, this.holeCoordinates.length - 1)) // 0 is the starting index o the array, the minus 1 is to keep repeating the random function
          ]
        )
      );
    }
    this.mole = this.mole.filter((newMole) => {
      newMole.drawMole();
      return !newMole.shouldDisappear;
    });

    //4. create the bullet
    this.bulletArray.forEach((newBullet) => {
      newBullet.drawBullet();
    });
    //4.1 remove the bullet from array as soon the bullet leaves the canvas
    this.removeBullets();
  }

  // 5. button to shoot the bullet
  keyPressed() {
    if (keyCode === SPACE_BAR) {
      console.log("Im shooting");
      this.shootBullet();
    }
  }
  // 6 shoot/add bullet to the bullet array
  shootBullet() {
    this.bulletArray.push(
      new Bullets(
        this.player.moveHorizontal + 18,
        this.player.moveVertical - 85,
        this.bulletImg
      )
    );
  }

  //6.1 remove fired bullets from array
  removeBullets() {
    this.bulletArray = this.bulletArray.filter(
      (newBullet) => newBullet.bulletTop && newBullet.bulletLeft <= CANVAS_WIDTH
    );
  }
}
