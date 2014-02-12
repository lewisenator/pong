function Background() {
	var self = this;
	self.draw = function(context) {
		context.fillStyle = '#000';
		context.fillRect(0, 0, game.width, game.height);
	};
}