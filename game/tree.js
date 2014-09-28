'use strict';

var _ = require('underscore');

var Tree = function() {
  this.graphics = new PIXI.Graphics();

  this.width = 60;

  this.x = 0;
  this.y = 0; 
  this.z = 0;

  this.alpha = 0;

  var colors = [
    [0xC88821, 0xB0781D],
    [0xEABF2D, 0xD1AB28],
    [0xBF5E26, 0xA65221],
    [0x5F361D, 0x452715],
    [0xA63921, 0x8F311C]
  ];

  this.colors = _.sample(colors);

  this.faces = [
    {
      color: this.colors[0],
      points: [
        { x:   0, y:   0, z:   0 },
        { x:  10, y:  60, z:   0 },
        { x:   0, y:  60, z: -10 },
        { x:   0, y:   0, z:   0 },
      ]
    },
    {
      color: this.colors[1],
      points: [
        { x:   0, y:   0, z:   0 },
        { x: -10, y:  60, z:   0 },
        { x:   0, y:  60, z: -10 },
        { x:   0, y:   0, z:   0 },
      ]
    }
  ];

  this.graphics.hitArea = new PIXI.Rectangle(-20, 0, 40, 60);
};

Tree.prototype.tick = function() {
  this.graphics.clear();

  if(this.alpha < 1) {
    this.alpha += 0.05;
  }

  if(this.z - Game.camera.z < -400) {
    return;
  }

  for(var i = 0; i < this.faces.length; i++) {
    var face = this.faces[i];

    this.graphics.beginFill(face.color, this.alpha);

    for(var j = 0; j < face.points.length; j++) {
      var point = face.points[j];

      var x = point.x + this.x - Game.camera.x;
      var y = point.y + this.y - Game.camera.y;
      var z = point.z + this.z - Game.camera.z;

      var scale = Game.perspective / (Game.perspective + z);

      var _x = (x * scale) + Game.origin.x;
      var _y = (y * scale) + Game.origin.y;

      if(j == 0) {
        this.graphics.moveTo(_x, _y);
      }
      else {
        this.graphics.lineTo(_x, _y);
      }
    }

    this.graphics.endFill();
  }
};

module.exports = Tree;