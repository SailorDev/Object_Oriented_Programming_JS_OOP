function Shape() { }
Shape.prototype.duplicate = function () {
   console.log("Shape Duplicate ")
}

//  The Connection  //
function extend(child, parent) {
   child.prototype = Object.create(parent.prototype);
   child.prototype.constructor = child;
}

// ---------
function Circle() { }
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
   console.log('Circle duplicate')
}

// ---------
function Square() { }
extend(Square, Shape);

Square.prototype.duplicate = function () {
   console.log('Square duplicate')
}


const shapes = [
   new Shape(),
   new Circle(),
   new Square()
];


for (let shape of shapes) {
   shape.duplicate();
}

A