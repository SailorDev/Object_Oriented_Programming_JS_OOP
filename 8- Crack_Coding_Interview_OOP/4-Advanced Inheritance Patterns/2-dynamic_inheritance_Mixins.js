const A = class {
  show() {
    console.log("A");
  }
};

const B = class {
  show() {
    console.log("B");
  }
};

const random = Math.random();
const myRandomClass = class extends ( random > 0.5 ? A : B) {};

new myRandomClass().show();

// ----------------------------------------------------- //

class A {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

function mixin(Parent) {
  return class A extends Parent {
    constructor(x, ...args) {
      super(...args);
      this.x = x;
    }
  }
}


const Mixed = mixin(A);
const mixed = new Mixed(1, 2, 3);

console.log(mixed)
// ----------------------------------------------------- //
