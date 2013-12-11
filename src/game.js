Game = {

  width: function() {
    return 400;
  },

  height: function() {
    return 300;
  },

  start: function() {
    Crafty.init(Game.width(), Game.height());
    Crafty.background('grey');
  },
}