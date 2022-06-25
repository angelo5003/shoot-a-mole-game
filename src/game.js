class Game {
  constructor() {
    this.player = new Player();
    this.mole = [];
    this.bullet = new Bullets();
    this.background = new BackgroundHole();
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
  }

  preload() {
    this.background.preload();
    this.player.preload();
    this.bullet.preload();
  }

  play() {
    this.background.drawHole();
    this.player.drawPlayer();

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
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
