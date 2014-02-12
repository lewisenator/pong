function Ball() {
	Entity.call(this);
	Ball.prototype = new Entity();
	Ball.prototype.constructor = Ball;

  var self = this;

  self.init = function() {
  	self.reset();
  };

  self.draw = function(context) {
  	context.beginPath();
    context.arc(
    	self.x + self.width / 2, 
    	self.y + self.height / 2, 
    	self.width / 2, 
    	0, 
    	2 * Math.PI, 
    	false
    );
    context.fillStyle = '#fff';
    context.fill();
  };

  var superUpdate = self.update;
  self.update = function() {
  	superUpdate.apply(this, arguments);
  	if (self.y + self.height > game.height) {
  		self.yVelocity *= -1;
  	} else if (self.y < 0) {
			self.yVelocity *= -1;
  	}
  	if (self.x + self.width > game.width) {
  		game.player.score += 1;
  		self.reset();
  	} else if (self.x < 0) {
  		game.bot.score += 1;
  		self.reset();
  	}
  	var hitter;
  	if (self.intersect(game.bot)) {
  		hitter = game.bot;
  	} else if (self.intersect(game.player)) {
  		hitter = game.player;
  	}

  	if (hitter) {
  		self.xVelocity *= -1.1;
  		self.yVelocity += hitter.yVelocity / 4;
  	}
  };

  self.reset = function() {
  	var max = 5
  		, min = -5;
		self.width = 20;
  	self.height = 20;

  	self.x = game.width / 2 - self.width / 2;
  	self.y = game.height / 2 - self.height / 2;

  	self.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
  	self.xVelocity = Math.random() > 0.5 ? -5 : 5;
  };

  self.init();
}