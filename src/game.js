class Game {
  constructor() {
    this.player = new Player();
  }

  preload() {
    this.player.preload();
  }

  play() {
    this.player.drawPlayer();
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
