'use strict';

var Game = require('./game/game');
window.Game = Game;

window.onload = function() {
  var container = document.getElementById('test');

  Game.init(container);
};