const _radius = Symbol();
const _draw = Symbol();

class Circle {
   constructor(radius) {
      this[_radius] = radius;
   }

   [_draw]() {
      console.log("draw")
   }
}


const c = new Circle(2);
console.log(c.radius)    // can't access .


console.log(Object.getOwnPropertyNames(c))   // [] empty array

const keys = Object.getOwnPropertySymbols(c);   // [Symbols ()]
console.log(keys);


c._draw()    // Error