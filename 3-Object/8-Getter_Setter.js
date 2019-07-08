function Circle(radius) {
   this.radius = radius;

   let defaultLocation = { x: 1, y: 4 };

   this.getDefaultLocation = function () {
      return defaultLocation;
   }

   this.draw = function () {
      console.log("Draw well")
   }


   Object.defineProperty(this, "defaultLocation", {
      get: function () {
         return defaultLocation;
      },

      set: function (value) {
         if (!value.x || !value.y)
            throw new Error("Invalid Location")

         defaultLocation = value;
      }
   })

}


const circle = new Circle(2);
// console.log(circle.getDefaultLocation());

console.log(circle.defaultLocation);

circle.defaultLocation = 2222;
// console.log(circle.defaultLocation); // Error