class Game {
  constructor() {
    this.player = new Player();
  }

  preload() {
    this.player.preload();
  }

  play() {
    // background("orange");
    this.player.drawPlayer();
  }
}
