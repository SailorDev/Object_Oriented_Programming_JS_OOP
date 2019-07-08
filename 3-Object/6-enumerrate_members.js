function Circle(radius) {
   this.radius = radius;
   this.draw = function () {
      console.log("Draw well")
   }
}

const circle = new Circle(2);


// for (let key in circle) {
//    console.log(key, circle[key])
// }


for (let key in circle) {
   if (typeof circle[key] !== 'function') {
      console.log(key, circle[key])
   }
}


const keys = Object.keys(circle);
console.log(keys);


if ('radius' in circle) {
   console.log(`Circle has radius`)
}