function Circle(radius) {
   console.log("This :", this);
   this.radius = radius;
   this.draw = function () {
      console.log("Draw well")
   }
}

const circle1 = new Circle(2);
circle1.draw()
console.log(Circle.constructor)


circle1.location = { x: 1 };
console.log(circle1)


Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);



