const team = {
  _players: [
    { firstName: "Pablo", lastName: "Sanchez", age: 22 },
    { firstName: "Maciek", lastName: "Giwin", age: 24 },
    { firstName: "Amender", lastName: "Chhina", age: 27 }
  ],
  _games: [
    { opponent: "Wisla Krakow", teamPoints: 1, opponentPoints: 3 },
    { opponent: "Cracovia", teamPoints: 1, opponentPoints: 7 },
    { opponent: "Rainbow Wariors", teamPoints: 33, opponentPoints: 12 }
  ],

  //getter methods:
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    const newPlayer = { firstName, lastName, age };
    this._players.push(newPlayer);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = { opponent, teamPoints, opponentPoints };
    this._games.push(game);
  }
};

console.log(team.games);
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Blacks", 4, 550);
team.addGame("Whites", 4, 12);
team.addGame("Pinks", 43, 50);
