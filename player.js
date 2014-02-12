function Player() {
	Paddle.call(this);
	Player.prototype = new Paddle();
	Player.prototype.constructor = Player;

  var self = this;

  self.init = function() {
 		self.x = 20;
  };

  var superUpdate = self.update;
  self.update = function() {
  	var speed = 15;

  	if (game.keyPressed.up) {
  		self.yVelocity = -speed;
  	} else if (game.keyPressed.down) {
  		self.yVelocity = speed;
  	} else {
  		self.yVelocity = 0;
  	}

  	superUpdate.apply(this, arguments);
  };

  self.init();
}