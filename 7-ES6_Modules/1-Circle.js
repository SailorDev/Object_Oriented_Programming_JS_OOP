const _radius = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}

	draw() {
		console.log(`Drawing with radius: ${_radius.get(this)}`);
	}
}


module.exports = Circle;
