class A {
  show() {}
};

// class B extends A {};

class C {
  log() {};
};


// composition

class B {
  constructor() {
    this.a = new A();
    this.c = new C();
  }
};


// --------------------------------------- //

class A {
  show() {}
};

// class B extends A {};

class C {
  log() {};
};


// composition

class B {
  constructor() {
    this.a = new A();
    this.c = new C();
  }
};


// --------------------------------------------/

class A {
  show() {}
};

// class B extends A {};

class C {
  log() {};
};


// composition

class B {
  constructor(a, c) {
    this.a = a;
    this.c = c;
  }
};

const a = new A();
const c = new C();
const b = new B(a, c)
