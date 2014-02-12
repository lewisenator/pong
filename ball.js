function Ball() {
	Entity.call(this);
	Ball.prototype = new Entity();
	Ball.prototype.constructor = Ball;

  var self = this;

  self.init = function() {
  	self.width = 20;
  	self.height = 20;

  	self.x = game.width / 2 - self.width / 2;
  	self.y = game.height / 2 - self.height / 2;
  };

  self.init();
}