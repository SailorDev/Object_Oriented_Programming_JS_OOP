function mixin(target, ...sources) {
   Object.assign(target, ...sources);
}


const canEat = {
   eat: function () {
      this.hunger--;
      console.log("Eating");
   }
};

const canWalk = {
   walk: function () {
      console.log("Walking")
   }
};

const canSwim = {
   swim: function () {
      console.log("swimming")
   }
};

// const person = Object.assign({}, canEat, canWalk);
// console.log(person);

function Person() {

}


mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);



function GoldFish() {

}

mixin(GoldFish.prototype, canEat, canSwim);
const fish = new GoldFish();
console.log(fish);