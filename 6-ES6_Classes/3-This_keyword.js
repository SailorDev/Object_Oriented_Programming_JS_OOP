'use strict'

const Circle = function () {
   this.draw = function () {
      console.log(this);
   }
};

const c = new Circle();
//Method Call
c.draw();


const draw = c.draw;
// Functions Call
draw();


// ---------------------------------------

class Circle2 {
   draw() {
      console.log(this)
   }
}

const c2 = new Circle2();
const draw2 = c2.draw;

draw2();