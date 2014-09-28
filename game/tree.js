'use strict';

var Tree = function() {
  this.graphics = new PIXI.Graphics();
  // this.graphics.position.x = 50;
  // this.graphics.position.y = 50;

  this.graphics.beginFill(0x00ff00);

  // this.graphics.drawRect(0, 0, 200, 200);

  this.graphics.moveTo(0, 0);
  this.graphics.lineTo(20, 60);
  this.graphics.lineTo(-20, 60);
  this.graphics.lineTo(0, 0);
  
  this.graphics.endFill();
};

module.exports = Tree;