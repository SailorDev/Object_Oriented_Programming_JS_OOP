===> It's collection of key, value pairs.

[1] object Literal Syntax 

      let circle = {
         radius: 1,

         location: {
            x: 1,
            y: 2
         },

         draw: function() {
            console.log("Hello")
         }
      };


   => If key, value pair is simple   === called (property). .. hold values.
   => if key, value pair is function === called (Method).   .. define logic.

   => I can access by DOT NOTATION (.)
      > circle.draw()
      > circle.radius

   => if Object have one or more methods .. called have behavior..

# // --------------------// 
[2] Factory or Constructor Function Syntax
         
         ==> If Object has 1 or more methods use this way >>>
      
      function createCircle (radius) {
         return {
            radius: radius,
            function draw() {
               console.log("draw")
            }
         }
      };

      const circle = createCircle(1);
      circle.draw();

# // --------------------// 
[3] Constructor Function 
         => Another way to create Object !

   1- Naming .. uppercase
   2- Not returning anything, but depend on (this) === reference to object which execute code 
   3- Use (new)  Operator to [A]create new empty Object! + and [B]set (this) to this Object !
         because byy default (this) refer to global Object.(global or window)
         & If i remove (new) .. (this) will refer to window object  ! WRONG 
         $ [C] Return this Object from Function .. i haven't return this (X) . THIS HAPPEN automatic


      function Circle(radius) {
         this.radius = radius;
         this.draw = function () {
            console.log("Draw well")
         }
      }

      const circle1 = new Circle(2);
      circle1.draw()


=> Finally, i have choice to pick One of These Patterns (Factory or Constructor)......

=> Every Object in JS has Property called (constructor), which reference to Function that Used to     construct or create this Object!


=> Note : Functions Are Object

=> Method for Function

      Circle.call({}, 1);
      Circle.apply({}, [1,2,3]);

   {} Refer to empty Object created (this) on constructor , this is another way of use (new)          operator!


# //--------------------------------------------------------//

[A] In JS , I have 2 category of Types ...
      (Value Types(Primitive)    &     Reference Types)
         
         Number                             Object
         String                             Function
         Boolean                            Array
         Symbol
         Undefined
         Null


   => These 2 kind of Types work differently.
   => Object store in somewhere in memory !


   === primitive are Copied By their (Value).
   === Objects are Copied By their (Reference)

# //--------------------------------------------------------//

[B] Add or remove properties ::
   => By Using constructor Functions and creating Objects using (new) tool
   => These Objects are Dynamic.. which we can add some properties or remove

   => Use (.) Dot Notation or Brackets Notations 

# //--------------------------------------------------------//

[C] Enumerrate All Members In Objects :
   1- Use (for - in)
   2- Object.keys(circle)  === to get all the keys.
   3- if ('radius' in circle) === check for existing property or method !

      for (let key in circle) {
         console.log(key, circle[key])
      }

      for (let key in circle) {
         if (typeof circle[key] !== 'function') {
            console.log(key, circle[key])
         }
      }


      const keys = Object.keys(circle);
      console.log(keys);


      if ('radius' in circle) {
         console.log(`Circle has radius`)
      }


# //--------------------------------------------------------//

[D] Abstraction : 
   => Hide The Details and complexity and Show Only the Essential 
   => Wooow. Big Problem here if i make everything in Object Accessible from Outside and Public.
   => Problem here every time i change the implementaion of Object. i have to modify code in             different places. 


      TO hide certain members from outside . declare
   1- declare by let color = "red" and not use this.color = "red".
         cause this variable will remove after function end invoking.

   2- Scopes are temporary , But Closure stay there!.

      function Circle(radius) {
         this.radius = radius;                       // Access from outside

         let defaultLocation = { x: 1, y: 4 };       // not access from outside

         let computeLocation = function (factor) {   // not access from outside
            //......
         }

         this.draw = function () {                   // Access from outside
            let x, y;

            computeLocation(2.1);
            
            defaultLocation;
            
            this.radius;    // only use this.


            console.log("Draw well")
         }
      }


# //--------------------------------------------------------//

[E] Getter and Setter 

   => What if i want to access as name from outside !
   => Object.defineProperty(this, "...", {
         get: function() {
            return ...
         },
         set: function(value) {
            ... = value;
         }
      })


      function Circle(radius) {
         this.radius = radius;

         let defaultLocation = { x: 1, y: 4 };

         this.getDefaultLocation = function () {
            return defaultLocation;
         }

         this.draw = function () {
            console.log("Draw well")
         }


         Object.defineProperty(this, "defaultLocation", {
            get: function () {
               return defaultLocation;
            },

            set: function (value) {
               if (!value.x || !value.y)
                  throw new Error("Invalid Location")

               defaultLocation = value;
            }
         })

      }


      const circle = new Circle(2);
      // console.log(circle.getDefaultLocation());

      console.log(circle.defaultLocation);

      circle.defaultLocation = 2222;
      // console.log(circle.defaultLocation); // Error

=> Finally Use Object.defineProperty  to define (getter and setter)

# //--------------------------------------------------------//
