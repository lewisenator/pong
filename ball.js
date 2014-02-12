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

  	self.yVelocity = 10;
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
  };

  self.init();
}