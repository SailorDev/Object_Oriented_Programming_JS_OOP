const a = {
	x:1
};

const b = {
  x: 2,
  y: 3
};

const c = {
  m() {
    console.log(this.x + this.y)
  }
}

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);


console.log(a)
console.log(b)
console.log(c)

a.m();
b.m();
c.m();

// ---------------------------------------------------- //

const x = {a: 1};
const y = {b: 1};
const z = {z: 1};


Object.setPrototypeOf(x, y);
Object.setPrototypeOf(y, z);


for (let prop in x) {
  console.log(prop)
}

console.log("***********")

for (let prop in x) {
  if(x.hasOwnProperty(prop)) {
    console.log(prop)
  }
}

console.log("***********")

const keys = Object.keys(x)
console.log(keys)

// ---------------------------------------------------- //

const a = { x: 2 };
const b = { y: 4 };

Object.setPrototypeOf(a, b);

console.log(a);
console.log(a.y);
console.log(Object.getPrototypeOf(a));    // y: 4
// ---------------------------------------------------- //

const a = { x: 2 };
const b = { y: 4 };

a.__proto__ = b;

console.log(a.__proto__)   // y:4

// ---------------------------------------------------- //

function Constructor1(x) {
  this.x = x;
  Constructor2.call(this)
}

function Constructor2() {
  this.y = 10;
}

Constructor1.prototype.f = function() {
  console.log(this);
};

Constructor1.prototype = Object.create(Constructor2.prototype);
Constructor2.prototype.constructor = Constructor2;

const obj = new Constructor1(2);
console.log(obj.y);
// ---------------------------------------------------- //

function Constructor1(x) {
  this.x = x;
}

function Constructor2() {
  this.y = 10;
}

Constructor1.prototype.func = function() {
  console.log(this);
};

// Constructor1.prototype = new Constructor2();    OR better
Constructor1.prototype.__proto__ = new Constructor2();


const obj = new Constructor1(2);
obj.func();
console.log(obj.y);

// ---------------------------------------------------- //

class A {
  constructor(x) {
    this.x = x;
  }

  show() {
    console.log(this.x);
  }
}

class B extends A {
  constructor(x) {
    super(x);
    this.y = 9;
  }

  show() {
    console.log(this.y);
  }
}

const b = new B(22);
console.log(b);
b.show();   // y: 9


// ---------------------------------------------------- //


