[1]   CLASSES   :: 

   -> It's A new way of creating Objects and implement Inheritance ..

   -> Using Classes === syntactic Sugar ... not as classes in python

   -> uses constructor Method ---->  to initialize Objects 

   -> put parameters on it like radius -> 
         
         constructor(radius) {
            this.radius = radius    <<<< the new instance object created !
         }


   --> First Class 

         class Cycle {
            constructor(radius) {
               this.radius = radius;
               this.move = function () { };   // not good
            }

            draw() {
               console.log("draw")
            }
         }

         const c = new Cycle(2);
         console.log(c)
         c.draw()


# // ------------------------------- //

[2] HOISTING ::

   -> There are 2 ways of creating Functions :

      1- Functions Declaration
      ->>>   function sayHello() {
            
             }
         
      2- Function Expression
      ->>>   const sayNice = function() {

             }


   -> Function Declaration is Hoisted === raised at the top of code 
            === can be called before it defined >>
      
            sayHello()

            function sayHello() {
               return "Hello"  
            } 



   -> Function Expression is (NOT) Hoisted === can't be raised to the top of code 
            === not be called before it defined >> 

            sayNice()     // WRONG

            const sayNice = function() {
               return "Nice"
            };

   >>>      THIS IS WRONG  (( ERROR ))


   -> As Same with classes ...
      
      [1]-  Class Declaration
         class Circle {

         }
      
      
      [2]- Class Expression
         const Circle = class {

         }
 
   >>>         The Both Are Not Hoisted !!!!  not be called before it defined >>
                      

# // ------------------------------- //

[3]  STATIC METHODS ::

   -> In classical Object Oriented Languages There are 2 Types Of Methods 
   [A]- Instance Method   === available on instance of class which is an Object
   
   [B]- Static Method     === available on Class Itself Not Object Instance.. used to create            Utility Function which Not specific to given Object 


         class Circle {
            constructor(radius) {
               this.radius = radius;
            }


            // Instance Method      <<<<<
            draw() {
               console.log("draw")
            }


            // Static Method        <<<<<
            static parse(str) {
               const radius = JSON.parse(str).radius;
               return new Circle(radius);
            }
         }



         const circle = Circle.parse('{"radius": 2}');
         console.log(circle); 


   -> Static Method used to create Utility Functions NOT tied to particular Object . 

# // ------------------------------- //

[4] This Keyword ::

   => First Part when this refer to Object Itself

         const Circle = function () {
            this.draw = function () {
               console.log(this);
            }
         };

         const c = new Circle();
         
         //Method Call
         c.draw();

   >>>      Here (this) keyword refer to Object Circle because new keyword which created new                empty Object and set this to Object created !

   => Second Part when make reference from this object !

         const draw = c.draw;
         // Functions Call
         draw();

   >>>      Now this keyword refer to Window Object or Global. which is not good so ,
                  prefer to use strict Mode at the top of code

            ... 'use strict'   

   === make it undefined ... it's good to not play with global object.


   => Third Part .. this keyword with ES6 Classes ::

      class Circle2 {
         draw() {
            console.log(this)
         }
      }

      const c2 = new Circle2();
      const draw2 = c2.draw;

      draw2();       // undefined 


   >>>      Here Classes are not require to use strict mode, it's built-in


# // ------------------------------- //

[5] Private Members Using Symbols ::

   => Abstraction one of core principle concepts of OOP .
   => Hiding The Details and Complexity and Showing Only The Essential Parts.
   => To Implement Abstraction >> Use Private Properties and Methods.
   => So i hides certain members of Object So, we won't accessible from Outside.

   => There are 3 Ways of making Private properties of ES6 Classes .
      [A] Using _name >>>  is not good , it's convention not abstraction. I can still access.
      [B] Using Symbol()
      [C] Using map()


   => Symbol()   is one of primitive Types of JS. 
   => Every time call Symbol()   make a unique identifier.

   => we cannot directly access from outside. 

   => Private Methods  === New Feature . Computed Property Names 

   => [_draw]() {}

   => Example:

            const _radius = Symbol();
            const _draw = Symbol();

            class Circle {
               constructor(radius) {
                  this[_radius] = radius;
               }

               [_draw]() {    // computed properties Names 
                  console.log("draw")
               }
            }


            const c = new Circle(2);
            console.log(c.radius)    // can't access .


            console.log(Object.getOwnPropertyNames(c))   // [] empty array

            const keys = Object.getOwnPropertySymbols(c);   // [Symbols ()]
            console.log(keys);


            c._draw()    // Error

# // ------------------------------- //

[6] Private Members Using Weak maps ::

   => It's essentially Dictionary where Keys are Objects and Values can be anything.
   => called weak because keys are weak.
   => 

         const _radius = new WeakMap();
         const _move = new WeakMap();
         class Circle {
            constructor(radius) {
               _radius.set(this, radius);
               _move.set(this, () => {
                  console.log('Move', this);    // Circle Object
               });
            }

            draw() {
               _move.get(this)();
               const getRadius = _radius.get(this);
               console.log(getRadius);
               
               console.log('Drawing');
            }
         }
         const c = new Circle(2);
         d.draw()
               => Move, Circle()
               => 2
               => Drawing

# // ------------------------------- //
[7] Getters and Setters ::

   => I want to read property from outside .
   => Using Old fashion

      Object.defineProperty(this, 'radius', {
         get: function() {
            
         }
      })

   => Using new Fashion, it's lool like a method but it's property

      const _radius = new WeakMap();

      class Circle {
         constructor(radius) {
            _radius.set(this, radius);
         }

         get radius() {
            return _radius.get(this);
         }

         set radius(value) {
            if (value <= 0) throw new Error('Invalid Value');
            _radius.set(this, value);
         }
      }
      const c = new Circle(2);

# // ------------------------------- //

[8] Inheritance ::
      => Using Inheritance in ES6 classes very Awesome .
      => Just use ... extends (name of Base class)
      => And use super() for constructor of inheritant class.

      class Shape {
         constructor(color) {
            this.color = color;
         }

         move() {
            console.log('Moving');
         }
      };


      class Circle extends Shape {
         constructor(color, radius) {
            super(color);

            this.radius = radius;
         }

         play() {
            console.log('Playing');
         }
      }

      const c = new Circle('red', 2);


# // ------------------------------- //

[9] Method Overriding ::

   => It't so easy, Just implement the same method on derived class (Object).

   => According prototypical Inheritance, Javascript engine search for the method on derived class and if it not exist, it search for the Base Class.

   => Just like tree.

         class Shape {
            move() {
               console.log('Moving')
            }
         }

         class Circle extends Shape {
            move() {
               super.move();       
               
               console.log("Circle Moving");    // JS start search here
            }
         }

         const c = new Circle()


# // ------------------------------- //

[10] Exercise === Implement Stack ::

      const _items = new WeakMap();

      class Stack {
         constructor() {
            _items.set(this, []);
         }

         push(value) {
            _items.get(this).push(value);
         }

         pop() {
            const items = _items.get(this);

            if (items.length === 0)
               throw new Error('Stack is Empty');

            return items.pop();
         }

         peek() {
            const items = _items.get(this);

            if (items.length === 0)
               throw new Error('Stack is Empty');

            return items[items.length - 1];
         }

         get count() {
            return _items.get(this).length;
         }

      }


      const stack = new Stack();
