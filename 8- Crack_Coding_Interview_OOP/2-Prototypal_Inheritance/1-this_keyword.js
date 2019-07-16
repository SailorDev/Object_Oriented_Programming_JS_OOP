function Constr(x) {
  this.x = x;

  function anotherFunc() {
    console.log(that.x);      // Undefined
  }

  anotherFunc();
};

const a = new Constr(2);

// --------------------------------------------------//
function Constr(x) {
  this.x = x;

  const that = this;
  function anotherFunc() {
    console.log(that.x);     // 2
  }

  anotherFunc();
};

const a = new Constr(2);

// --------------------------------------------------//
function Constr(x) {
  this.x = x;

  function anotherFunc() {
    console.log(this.x);     // 2
  }

  anotherFunc.call(this);
};

const a = new Constr(2);

// --------------------------------------------------//

function Constr(x) {
  this.x = x;

  const anotherFunc = () => {
    console.log(this.x);
  }
  anotherFunc();
};

const a = new Constr(2);


// --------------------------------------------------//

const a = {
	show(x, y) {
		console.log(this.x, x, y);
	}
};

const b = {
	x: 10
};


a.show.call(b, 12, 15);

a.show.apply(b, [12, 15]);

const showB = a.show.bind(b, 12, 15);
showB()


// --------------------------------------------------//
show(x, y) {   // error
	function f() {
	  console.log(this.x, x, y);
	}
	f()
}
// This will be undefined.
// so use Arrow Function.

const a = {
	show(x, y) {
    const f = () => {
      console.log(this.x, x, y);
    }
    f()
	}
};

const b = {
	x: 10
};


const showB = a.show.bind(b, 12, 15);
showB()


// --------------------------------------------------//



// --------------------------------------------------//



// --------------------------------------------------//
