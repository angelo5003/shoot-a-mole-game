class Game {
  constructor() {
    this.player = new Player();
    this.mole = new Mole();
  }

  preload() {
    this.player.preload();
  }

  play() {
    this.player.drawPlayer();
    this.mole.drawMole();
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
