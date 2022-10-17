const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

// this is the Game constructor
function Game() {
    // these are the Game object's properties
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

// the initializeGame method is where the Enemy and Player objects will be set up
Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text', 
            name: 'name', 
            message: 'What is your name?'
        })
        // destructure name from the prompt object
        .then(({name}) => {
            this.player = new Player(name);
        
        // test the object creation
        this.startNewBattle();
        });
};


module.exports = Game;