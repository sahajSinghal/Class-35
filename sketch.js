var backgroundImg;
var gameState = 0, playerCount;
var database;

var player, form, game;

function setup(){
  createCanvas(400,400);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}

function draw(){ 
}
