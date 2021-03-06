class Game {
  constructor() {
    this.player = new Player();
    this.bullet = new Bullets();

    this.backgroundHole = new BackgroundHole();
    this.gameBackground = new Background();

    this.holeCoordinates = [
      // Left column circle coords
      {
        x: 218,
        y: 45,
      },
      {
        x: 218,
        y: 145,
      },
      {
        x: 218,
        y: 245,
      },
      // Middle column circle coords
      {
        x: 360,
        y: 45,
      },
      {
        x: 360,
        y: 145,
      },
      {
        x: 360,
        y: 245,
      },
      // Right column circle coords
      {
        x: 505,
        y: 45,
      },
      {
        x: 505,
        y: 145,
      },
      {
        x: 505,
        y: 245,
      },
    ];
    this.moleArray = [];
    this.bulletArray = [];
    this.score = 0;
    this.highScore = 0;
  }

  //1. preload images etc
  preload() {
    this.gameBackground.preload();
    this.backgroundHole.preload();
    this.bulletImg = loadImage("assets/images/laser-bullet.png");
    this.moleImg = loadImage("assets/images/diglett_without_background.png");
    this.player.preload();
    diglettSound = loadSound("assets/sounds/diglett.mp3");
    laserBeamSound = loadSound("assets/sounds/laserbeam.mp3");
  }
  //2. everything that is related to play the game
  play() {
    this.gameBackground.drawBackground();
    this.backgroundHole.drawHole();
    this.player.drawPlayer();

    // 3. random method to show and hide the mole on the holes
    if (frameCount % 75 === 0) {
      this.moleArray.push(
        new Mole(
          this.holeCoordinates[
            Math.floor(random(0, this.holeCoordinates.length - 1)) // 0 is the starting index of the array, the minus 1 is to keep repeating the random function
          ],
          this.moleImg,
          diglettSound.play(),
          diglettSound.setVolume(0.2)
        )
      );
    }
    this.moleArray = this.moleArray.filter((newMole) => {
      newMole.drawMole();
      return !newMole.shouldDisappear;
    });

    //4. create the bullet
    this.bulletArray.forEach((newBullet) => {
      newBullet.drawBullet();
    });
    //4.1 remove the bullet from array as soon the bullet leaves the canvas
    this.removeBullets();

    // 4.2 Collision
    this.bulletArray.forEach((bullet) => {
      this.moleArray.forEach((mole) => {
        if (this.isColliding(bullet, mole)) {
          this.score++;
          scoreOfPlayer.innerText = `${this.score} points`;
        }
      });
    });
  }

  // 5. button to shoot the bullet
  keyPressed() {
    if (keyCode === SPACE_BAR) {
      this.shootBullet();
    }
  }
  // 6 shoot/add bullet to the bullet array
  shootBullet() {
    this.bulletArray.push(
      new Bullets(
        this.player.moveHorizontal + 40,
        this.player.moveVertical - 90,
        this.bulletImg,
        laserBeamSound.play(),
        laserBeamSound.setVolume(0.3)
      )
    );
  }

  //6.1 remove fired bullets from array
  removeBullets() {
    this.bulletArray = this.bulletArray.filter(
      (newBullet) => newBullet.bulletTop && newBullet.bulletLeft <= CANVAS_WIDTH
    );
  }

  //7. Collision detection
  isColliding(bullet, mole) {
    const bottomOfBullet = bullet.bulletTop + bullet.heightOfBullet;
    const topOfMole = mole.y;
    const bottomOfBulletGreaterThanTopOfMole = bottomOfBullet >= topOfMole;

    const topOfBullet = bullet.bulletTop;
    const bottomOfMole = mole.y + mole.moleHeight;
    const isBottomOfBulletSmallerThanBottomOfMole = topOfBullet <= bottomOfMole;

    const leftOfBullet = bullet.bulletLeft;
    const rightOfMole = mole.x + mole.moleWidth;
    const isLeftOfBulletSmallerThanRightOfMole = leftOfBullet <= rightOfMole;

    const rightOfBullet = bullet.bulletLeft + bullet.widthOfBullet;
    const leftOfMole = mole.x;
    const isRightOfBulletBiggerThanLeftOfMole = rightOfBullet >= leftOfMole;

    return (
      bottomOfBulletGreaterThanTopOfMole &&
      isBottomOfBulletSmallerThanBottomOfMole &&
      isLeftOfBulletSmallerThanRightOfMole &&
      isRightOfBulletBiggerThanLeftOfMole
    );
  }
}
