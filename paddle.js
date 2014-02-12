function Paddle() {
	Entity.call(this);
	Paddle.prototype = new Entity();
	Paddle.prototype.constructor = Paddle;

  var self = this;

  self.init = function() {
  	self.width = 20;
  	self.height = 100;
  	self.score = 0;
  	self.y = game.height / 2 - self.height / 2;
  };

  var superUpdate = self.update;
  self.update = function() {
  	superUpdate.apply(this, arguments);

  	if (self.y + self.height > game.height) {
  		self.y = game.height - self.height;
  	} else if (self.y < 0) {
			self.y = 0;
  	}
  };

  self.init();
}