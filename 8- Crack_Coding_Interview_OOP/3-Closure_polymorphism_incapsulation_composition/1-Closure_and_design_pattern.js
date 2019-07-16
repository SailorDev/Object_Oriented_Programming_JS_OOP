function f() {
  const a = 12;

  return function g() {
    return a;
  }
};

const func1 = f()();
console.log(func1);   // 12
//or
const func2 = f();
const value = func();
console.log(value);  // 12
// ------------------------------------------------  //

function f() {
  const a = 12;

  return {
    m1() {
      return a;
    },
    m2(c) {
      return a + c;
    }
  }
}

const obj1 = f();

console.log(obj1);
console.log(obj1.m1())    // 12
console.log(obj1.m2(4))   // 16
// ------------------------------------------------  //

const obj1 = (function f() {
  const a = 12;

  return {
    m1() {
      return a;
    },
    m2(c) {
      return a + c;
    }
  }
})();

console.log(obj1)
console.log(obj1.m1())    // 12
console.log(obj1.m2(4))   // 16
// ------------------------------------------------  //


