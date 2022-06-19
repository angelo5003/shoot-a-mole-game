class Game {
  constructor() {
    this.player = new Player();
  }

  play() {
    background("orange");
    this.player.drawPlayer();
  }
}
