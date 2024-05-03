class Game {
  constructor({ players, score }) {
    this.players = players;
    this.score = score;
  }

  addPlayer(playerName) {
    this.players.push(playerName);
  }

  addScore(updateScore) {
    this.score = +updateScore;
  }
}

const fiveHundred = new Game({
  players: ['Jason', 'Mia'],
  score: 0,
});

console.log('fiveHundred', fiveHundred);

fiveHundred.addPlayer('Simon');
fiveHundred.addScore(75);

console.log('fiveHundred', fiveHundred);
