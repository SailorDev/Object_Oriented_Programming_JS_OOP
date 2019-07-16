function Constructor1(x, y) {
  this.x = x;
  this.y = y;
};

const methods = {
  add(z) {
    return this.x + this.y + z;
  },

  show() {
    console.log(this);
  }
};

const c = new Constructor1(2, 3);
const result = methods.add.call(c, 5);

console.log(result);   // 10

const result2 = methods.show.call(c);    // Constructor1 {} 

//---------------------------------------------------//

function Constructor1(x, y) {
  this.x = x;
  this.y = y;
}

function Constructor2(a, b) {
  Constructor1.call(this, a, b);

  this.a = a;
  this.b = b;
}

const obj = new Constructor2(10, 20);

console.log(obj);

//---------------------------------------------------//

function Constructor1(x, y) {
  this.x = x;
  this.y = y;
}

Constructor1.prototype.sum = function() {
  let sum = 0;
  for (let prop in this) {
    sum += this[prop];
  }

  return sum;
};

function Constructor2(a, b) {
  Constructor1.call(this, a, b);
  this.a = a;
  this.b = b;
}

Constructor2.prototype.show = function() {
  console.log(this);
};

Constructor2.prototype.__proto__ = Constructor1.prototype;

// Constructor2.prototype = Object.create(Constructor1.prototype);
// Constructor2.prototype.constructor = Constructor2;

const obj = new Constructor2(10, 20);

console.log(obj);
//---------------------------------------------------//

class A {
  constructor(x) {
    this.x = x;
  }

  show() {
    console.log(this.x);
  }
};

class B extends A {
  constructor(x) {
    super(x);
    this.y = 12;
  }

  show() {
    console.log(this.y);
  }

  sum() {
    let sum = 0;
    for (let prop in this) {
      sum += this[prop];
    }
    return sum;
  }
};

const obj = new B(4);

obj.show()    // 12 not x
console.log(obj);
console.log(obj.sum())


//---------------------------------------------------//


//---------------------------------------------------//


