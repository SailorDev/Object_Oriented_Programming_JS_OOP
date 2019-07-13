class Shape {
	move() {
		console.log('Moving')
	}
}



class Circle extends Shape {
	move() {
		super.move();
		
		console.log("Circle Moving");
	}
}

const c = new Circle()
