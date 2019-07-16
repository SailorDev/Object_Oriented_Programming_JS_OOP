/* F.P */
const myObject = {
  data: 12,
  otherData: 20
};

const update = (obj, x) => ({
  ...obj,
  data: x
});

const updatedObj = update(myObject, 30);

console.log(updatedObj.data);
console.log(myObject.data);
console.log(updatedObj.otherData);


// ---------------------------------------------------------
/* OOP */
const myObject = {
  data: 12,
  otherData: 20,
  update(x) {
    this.data = x
  }
};

myObject.update(30);
console.log(myObject.data)
// console.log(myObject.otherData)

myObject.update(99);
console.log(myObject.data)
// ---------------------------------------------------------

const objectLiteral = {
  prop1: 2,
  prop2: 33,
  otherProp() {
    console.log(this.prop1);
  }
};

const newObject = Object.create(objectLiteral);

console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.otherProp();
// ---------------------------------------------------------

function SomeConstructorFunc(x, y, k) {
  this.x = x;
  this.y = y;
  this.k = k;

  this.show = function() {
    console.log(this.x, this.y, k);
  }
}

const myObj = new SomeConstructorFunc(2, 3, 9);

myObj.show()

// ---------------------------------------------------------

function SomeConstructorFunc(x, y, k) {
  this.x = x;
  this.y = y;
  this.k = k;
}

SomeConstructorFunc.prototype = {
  show() {
    console.log(this.x, this.y, this.k);
  }
};

SomeConstructorFunc.prototype.show2 = function() {
  console.log(this.k, this.y, this.x)
}

const myObj = new SomeConstructorFunc(2, 3, 9);
myObj.show();
myObj.show2();

// ---------------------------------------------------------

class SomeClass {
  constructor(x, y, k) {
    this.x = x;
    this.y = y;
    this.k = k;
  }

  show() {
    console.log(this.x, this.y, this.k);
  }
}

const myClass = new SomeClass(2, 4, 9);
myClass.show()

// ---------------------------------------------------------

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  log() {
    console.log(this.name, this.surname);
  }
}

class GuestUser extends User {
  log() {
    console.log("Guest");
    super.log();
  }
}

const guest = new GuestUser("Ali", "lolaa");
guest.log()

class PremiumUser extends User {
  log() {
    console.log("Premium");
    super.log();
  }
}

const premium1 = new PremiumUser("Safi", "dancer");
premium1.log()


// ---------------------------------------------------------
					/* Factory Function */
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  log() {
    console.log(this.name, this.surname);
  }
}

class GuestUser extends User {
  log() {
    console.log("Guest");
    super.log();
  }
}

class PremiumUser extends User {
  log() {
    console.log("Premium");
    super.log();
  }
}

function UserFactory(type, props) {
  switch (type) {
    case "Guest":
      return new GuestUser(props.name, props.surname);

    case "Premium":
      return new PremiumUser(props.name, props.surname);

    case "User":
      return new User(props.name, props.surname);

    default:
      return {};
  }
}

const user1 = UserFactory("Guest", { name: "Ali", surname: "Lolo" });
console.log(user1);

const user2 = UserFactory("Premium", { name: "Muhammed", surname: "Dodo" });
console.log(user2);

// ---------------------------------------------------------

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  log() {
    console.log(this.name, this.surname);
  }
}

class GuestUser extends User {
  log() {
    console.log("Guest");
    super.log();
  }
}

class PremiumUser extends User {
  log() {
    console.log("Premium");
    super.log();
  }
}

const userTypes = {
  Guest: GuestUser,
  Premium: PremiumUser,
  User: User
};

function UserFactory(type, props) {
  return new (userTypes[type] || class {}) (props.name, props.surname);
}

const user1 = UserFactory("Guest", { name: "Ali", surname: "Lolo" });
console.log(user1);

const user2 = UserFactory("Premium", { name: "Muhammed", surname: "Dodo" });
console.log(user2);

// ---------------------------------------------------------







// ---------------------------------------------------------




// ---------------------------------------------------------
