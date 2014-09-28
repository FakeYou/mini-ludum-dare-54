'use strict';

var Tree = require('./tree');

var Game = {};

Game.init = function(container) {
  Game.stage = new PIXI.Stage(0xddffff);
  Game.renderer = PIXI.autoDetectRenderer(800, 500);

  Game.container = container;
  Game.container.appendChild(Game.renderer.view);

  Game.tree = new Tree(Game.stage);
  Game.stage.addChild(Game.tree.graphics);

  Game.graphics = new PIXI.Graphics();
  Game.graphics.beginFill(0xff0000);
  Game.graphics.drawRect(10, 10, 100, 100);
  Game.graphics.endFill();

  Game.stage.addChild(Game.graphics);

  requestAnimFrame(Game.tick);
};

Game.tick = function() {
  requestAnimFrame(Game.tick);

  Game.graphics.position.x += 1;
  Game.graphics.position.y  += 1;


  Game.renderer.render(Game.stage);
};

module.exports = Game;