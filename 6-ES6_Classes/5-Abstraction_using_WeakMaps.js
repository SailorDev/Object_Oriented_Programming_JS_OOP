const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);
		_move.set(this, () => {
			console.log('Move', this);    // Circle Object
		});
	}

	draw() {
		_move.get(this)();

		const getRadius = _radius.get(this);
		console.log(getRadius);
		
		console.log('Drawing');
	}
}

const c = new Circle(2);
