const SampleClass = (function() {
  let count = 0;

  return class {
    constructor(x) {
      this.x = x;
    }

    value() {
      return count;
    }

    increament() {
      return count++;
    }
  };
})();

const sample = new SampleClass();
console.log(sample.value());
console.log(sample.increament());
console.log(sample.increament());
console.log(sample.increament());
console.log(sample.increament());
// ----------------------------------------------- //

class SampleClass {
  _count = 0;
  constructor(x) {
    this.x = x;
  }

  value() {
    return this._count;
  }

  increament() {
    return this._count++;
  }
}

const sample = new SampleClass(6);
console.log(sample.value());
console.log(sample.increament());
console.log(sample.increament());
console.log(sample.increament());
console.log(sample.increament());
// ----------------------------------------------- //

class SampleClass {
  constructor() {}
  method() {}

  static method1() {
    console.log(this);
  }
}

const obj = new SampleClass();

// console.log(obj.method1)  // undefined
SampleClass.method1()

SampleClass.prop = 22;
console.log(SampleClass.prop);
// ----------------------------------------------- //

class SampleClass {
  constructor() {}
  method() {}

  static method2() {
    console.log("this");
  }
}

class SampleClass2 extends SampleClass {
  static method2() {
    console.log(this);
  }
}

SampleClass2.method2(); // thE FUNCTION 2

SampleClass.method2(); //  "THIS"



// ----------------------------------------------- //
