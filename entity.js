function Entity() {
  var self = this;

  self.init = function() {
  	self.x = 0;
  	self.y = 0;

  	self.width = 0;
  	self.height = 0;

  	self.xVelocity = 0;
  	self.yVelocity = 0;
  };

  self.update = function() {
  	self.x += self.xVelocity;
  	self.y += self.yVelocity;
  };

  self.draw = function(context) {
  	context.fillStyle = '#fff';
  	context.fillRect(self.x, self.y, self.width, self.height);
  };

  self.intersect = function(other) {
	  return this.y + this.height > other.y &&
	         this.y               < other.y + other.height &&
	         this.x + this.width  > other.x &&
	         this.x               < other.x + other.width;
  };

  self.init();
}