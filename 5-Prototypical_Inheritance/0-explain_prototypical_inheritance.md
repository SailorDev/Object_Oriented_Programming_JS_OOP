[1] Create First Prototypical Inheritance :::
         
         function Shape() {};
         Shape.prototype.duplicate = function () {console.log('duplicated!')};
         
         function Circle(radius) {this.radius = radius;};
         Circle.prototype.draw = function () {console.log('draw!')};

         const s = new Shape()
         const c = new Circle(1)

   >>>     c  =>   circleBase(Circle.prototype)    =>    ObjectBase  

   >>>     s  =>   shapeBase(Shape.prototype)      =>    ObjectBase  


   => To set Inheritance Here ===>  i wanna make (circleBase) to inherits from (shapeBase)

   => Use   { Circle.prototype = Object.create(Object.prototype)   // objectBase // }
         
   >>>      Circle.prototype = Object.create(Shape.prototype)


# // --------------------------------- // 

[2] Resetting The Constructor :::

   => In JS , Every Object has constructor Property that return function that was Used which             construct or create that Object .
   
   => In Normal fashion with using Dynamic fashion
   >>>     new Circle.prototype.constructor(1) === new Circle(1)

   $  But when Using:
   >>>     Circle.prototype = Object.create(Shape.prototype)

   -> Here new Circle.prototype.constructor(1)  === Shape{}   (Shape constructor) 
         that's because i reset the prototype of Circle .

   -> So the solution that i should reset the constructor also ,,

   >>>     Circle.prototype.constructor = Circle; 


# // --------------------------------- // 

[3]  Calling the Super Constructor :::

   => Note: when using new operator => create new empty Object + point (this) to that Object          (from constructor) ,, if i don't use (new) : this will refer to window (global);


   => So, i will call Shape Function into Circle Function .. using (Shape.call())

   >>>     Shape.call(this, color);

   => Every Function in JS is an Object .

   => Here (this) refer to the Object to be used as current Object ! === instance of circle Object
   
   => Use color argument as 2nd .

      function Shape(color) {this.color = color;}
      Shape.prototype.duplicate = function () { console.log('duplicated!') };


      function Circle(radius, color) {
         Shape.call(this, color);            <<<<<

         this.radius = radius;
      }


      Circle.prototype = Object.create(Shape.prototype);
      Circle.prototype.constructor = Circle;

      Circle.prototype.draw = function () { console.log('draw!') }

      const shape1 = new Shape()
      const circle1 = new Circle(1, 'red')


      console.log(circle1)   === color:"red" + radius:1

   => circle1 Now Has 2 properties (color, radius)
         === This because Using    Shape.call(this, color)

# // --------------------------------- // 

[4] Intermediate Function Inheritance :::

   => to make inherit from function to another will make       code noisy ..

   => So, i will make inherits connection on function

      function extend(child, parent) {
         child.prototype = Object.create(Shape.prototype);
         child.prototype.constructor = child;
      }


   => Then i call extend Function 

   >>>     extend(Circle, Shape)

   >>>     extend(Square, Shape)


# // --------------------------------- // 
[5] Method Override :::

   => Override method that is defined in Base Object .

   => Redefined this method 

   => Put it after extend() calling Function 



      function Shape(color) {
         this.color = color;
      }

      Shape.prototype.duplicate = function () {
         console.log('duplicated!')
      };


      function extend(child, parent) {
         child.prototype = Object.create(parent.prototype);
         child.prototype.constructor = child;
      }

      function Circle(radius, color) {
         Shape.call(this, color);

         this.radius = radius;
      }

>>>   extend(Circle, Shape);

      Circle.prototype.duplicate = function () {
         Shape.prototype.duplicate.call(this);    <<<<

         console.log('Circle duplicated!')
      };


# // --------------------------------- // 

[6] Polymorphism :::  Very important concept on OOP ::::

   -> poly === many   &&   morphism === forms
   
   => based on prev. example of method override !!

   => i have many forms of duplicate method .

   => Imagine that i have array of Shape Objects ....


      function Shape() { }
      Shape.prototype.duplicate = function () {
         console.log("Shape Duplicate ")
      }

      //---
      function extend(child, parent) {
         child.prototype = Object.create(parent.prototype);
         child.prototype.constructor = child;
      }

      //---
      function Circle() { }
      extend(Circle, Shape);

      Circle.prototype.duplicate = function () {
         console.log('Circle duplicate')
      }

      //---
      function Square() { }
      extend(Square, Shape);

      Square.prototype.duplicate = function () {
         console.log('Square duplicate')
      }

>>>      Now Make array of shapes 

      const shapes = [
         new Shape(),
         new Circle(),
         new Square()
      ];


      for (let shape of shapes) {
         shape.duplicate();
      }

>>>      Very Important
===>   That's why encapsulate variables and functions into Objects and using Inheritance, we can execute many forms of a method using single line of code !



# // --------------------------------- // 

[7] When to Use Inheritance :::
   => Inheritance is good but take care of using it specially on small projects.
         it can be fragile code and bad organized

   => Avoid creating Inheritance hierarchies .....

   => just make Inheritance on one layer ..

   => Favor Composition over Inheritance .

   (((((((   In JS i can use *Mixins* to create Compostion   )))))))

   => Composition is a different way of design VS Inheritance


# // --------------------------------- // 

[8] Mixins :::

   => I create 2 Objects (canEat - canWalk)
   => And can compose these Objects together to create Person that can eat and walk.

   => Using Object.assign()
         === to copy property and methods, from 1 object to another object .
         -> pass empty object as target {} ,, and pass 1 or more source Objects 

         -> const person = Object.assign({}, canEat, canWalk)
               => will copy methods and property of ( canEat-canWalk ) and assign them to blank Object

   => I can instead empty object {} ,, i can create constructor Functions and pass it instead.
         
         function Person() {}

         -> Object.assign(Person.prototype, canEat, canWalk)

         const person = new Person();
   
   => I can use rest operator to collect all arguments and turn it into array.
   => then sources is an array ==> but Object.assign() new sources as objects.
   => So use spread Operator to spread and array into multiple arguments(objects).

      function mixin(target, ...sources) {     === Rest Operator
         Object.assign(target, ...sources);    === spread Operator
      }


   => example here: 

      function mixin(target, ...sources) {   <<<<< (rest operator) make array 
         Object.assign(target, ...sources);  <<<<< (Spread operator)
      }


      const canEat = {
         eat: function () {console.log("Eating")};
      };

      const canWalk = {
         walk: function () {console.log("Walking")};
      };

      const canSwim = {
         swim: function () {console.log("swimming")};
      };


      ///// const person = Object.assign({}, canEat, canWalk);
      ///// console.log(person);

      
      function Person() { };


      mixin(Person.prototype, canEat, canWalk);
      
      const person = new Person();
      console.log(person);


      function GoldFish() { };

      
      mixin(GoldFish.prototype, canEat, canSwim);
      
      const fish = new GoldFish();
      console.log(fish);


# // --------------------------------- // 
















> Al Zohor pharmacy   3 months.