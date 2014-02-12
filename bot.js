function Bot() {
	Paddle.call(this);
	Bot.prototype = new Paddle();
	Bot.prototype.constructor = Bot;

  var self = this;

  self.init = function() {
 		self.x = game.width - self.width - 20;
  };

  var superUpdate = self.update;
  self.update = function() {
  	var speed = 5;

    if (game.ball.center().y < self.y) {
      self.yVelocity = -speed;
    } else if (game.ball.center().y > self.y) {
      self.yVelocity = speed;
    } else {
      self.yVelocity = 0;
    }

  	superUpdate.apply(this, arguments);
  };

  self.init();
}