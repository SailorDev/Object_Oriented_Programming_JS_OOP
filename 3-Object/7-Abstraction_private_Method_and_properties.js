function Circle(radius) {
   this.radius = radius;

   let defaultLocation = { x: 1, y: 4 };

   let computeLocation = function (factor) {
      //......
   }


   this.draw = function () {
      let x, y;

      computeLocation(2.1);
      // defaultLocation;
      // this.radius;


      console.log("Draw well")
   }
}

const circle = new Circle(2);
circle.draw()

circle.defaultLocation // Not working because using Abstraction principle.