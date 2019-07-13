class Cycle {
   constructor(radius) {
      this.radius = radius;
      this.move = function () { };
   }

   draw() {
      console.log("draw")
   }
}


const c = new Cycle(2);


console.log(c)
c.draw()