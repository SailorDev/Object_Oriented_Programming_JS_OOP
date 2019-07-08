function Circle(radius) {
   this.radius = radius;

   this.move = function () {
      this.draw()
      console.log("Move")
   }
}

Circle.prototype.draw = function () {
   // this.move()
   console.log("draw")
}

Circle.prototype.toString = function () {
   return `This circle with radius ${this.radius}`
}


const c1 = new Circle(1)
const c2 = new Circle(1)



c1.draw()
console.log(c2.toString())