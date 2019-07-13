class Shape {
	constructor(color) {
		this.color = color;
	}

	move() {
		console.log('Moving');
	}
};


class Circle extends Shape {
	constructor(color, radius) {
		super(color);

		this.radius = radius;
	}

	play() {
		console.log('Playing');
	}
}

const c = new Circle('red', 2);





