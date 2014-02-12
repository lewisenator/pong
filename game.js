function Game(canvas) {
  var self = this;

  self.init = function() {
  	self.canvas = canvas;
  	self.context = canvas.getContext('2d');
  	self.width = canvas.width;
  	self.height = canvas.height;
  	self.keyPressed = {};
  };

  self.start = function() {
  	var fps = 60
  		, interval = 1000 / fps;
  	setInterval(function() {
	  	self.update();
	  	self.draw();
  	}, interval)
  };

  self.update = function() {
  	self.entities.forEach(function(entity) {
  		if (entity.update) entity.update();
  	});
  };

  self.draw = function() {
  	self.entities.forEach(function(entity) {
  		if (entity.draw) entity.draw(self.context);
  	});
  };

  $(canvas).on('keydown keyup', function(e) {
  	var keyName = Game.keys[e.which];
  	if (keyName) {
  		self.keyPressed[keyName] = e.type === 'keydown';
  		e.preventDefault();
  	}
  });

  Game.keys = {
  	32: 'space',
  	37: 'left',
  	38: 'up',
  	39: 'right',
  	40: 'down'
  }

  self.init();
}