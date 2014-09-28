// 'use strict';

var Tree = require('./tree');

var Game = {};

Game.width = 800;
Game.height = 500;

Game.perspective = 500;
Game.origin = {
  x: Game.width / 2,
  y: 0
};

Game.camera = {
  x: 0,
  y: 40,
  z: 0
};

Game.init = function(container) {
  Game.stage = new PIXI.Stage(0xddffff);
  Game.renderer = PIXI.autoDetectRenderer(Game.width, Game.height, null, false, true);

  Game.container = container;
  Game.container.appendChild(Game.renderer.view);

  Game.background = new PIXI.Graphics();
  Game.background.beginFill(0x44ff44);
  Game.background.drawRect(0, 100, Game.width, Game.height);
  Game.background.endFill();
  Game.stage.addChildAt(Game.background, 0);

  Game.trees = [];

  requestAnimFrame(Game.tick);
};

Game.tick = function() {
  requestAnimFrame(Game.tick);

  for(var i = 0; i < Game.trees.length; i++) {
    Game.trees[i].tick(); 
  }

  if(Math.random() < 0.1 && Game.trees.length < 30) {

    var tree = new Tree(Game.stage);
    Game.stage.addChildAt(tree.graphics, 1);

    tree.x = Game.random(-300, 300);
    tree.y = 100;
    tree.z = Game.camera.z - 50;

    Game.trees.push(tree);
  }

  if(Game.trees.length >= 30) {
    var deleted = Game.trees.splice(0, 1);

    Game.stage.removeChild(deleted[0].graphics);
  }

  Game.camera.z += 2;

  Game.renderer.render(Game.stage);
};

Game.random = function(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

module.exports = Game;