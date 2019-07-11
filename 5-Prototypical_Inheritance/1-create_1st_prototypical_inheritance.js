function Shape(color) {
   this.color = color;
}

Shape.prototype.duplicate = function () {
   console.log('duplicated!')
};


function extend(child, parent) {
   child.prototype = Object.create(parent.prototype);
   child.prototype.constructor = child;
}


function Circle(radius, color) {
   Shape.call(this, color);

   this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
   console.log('draw!')
}

Circle.prototype.duplicate = function () {
   Shape.prototype.duplicate.call(this);

   console.log('Circle duplicated!')
};


// function Square(depth) {
//    Shape.call(this, color)
//    this.depth = depth;
// }

// extend(Square, Shape);


const shape1 = new Shape()
const circle1 = new Circle(1, 'red')
// const sq = new Square(22, 'yellow');



circle1.duplicate();
// sq.duplicate()