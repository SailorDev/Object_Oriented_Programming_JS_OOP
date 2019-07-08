[1] Inheritance :::
   => It's The One of the Core Concept of OOP
   => enable Object to take properties and Methods of another Object.
   => make easy to reuse code id different places.
   => we don't want repeat implementaion of same code 

                     Shape  (Base-Super-Parent)
                  / method()   \
               /                 \ === Is-A (relationship)
            /                      \      
         Circle                  Square
   (derived-sup-child)     (derived-sup-child)

   => I will make (Circle - Square) to inherit method() from parent class  
   => In JS . WE don't have classes . I have Only Objects.

      => So, The Correct word Using === ( Prototypical Inheritance ) === 

   => I have 2 type of Inheritance ( classical - Prototypical )

   => So Important in Interview Questions.

# // ------------------------------------- //
[2] Prototypical Inheritance :::

                         
                     shape(object)     ==== called prototype of circle
                        method()
                     /
                  /
               /
          circle(obj)


   => I create shape Object and circle Object (only Object)
   => Refer to shape Obj as ===  prototype === the parent of another Object .
   => Every object in JS ,, has prototype(parent) and inherits all members defined in prototype.

   => let x = {};
   => let y = {};


                        ObjectBase (prototype)
                     /                       \
                    /                         \
                   /                           \
                 X                              y
      
   => every Object i created, directly inherits from ObjectBase(prototype-parent). --proto--
   => ObjectBase is the root of all Objects in JS. and doesn't have prototype-parent

   => Prototype is just regular Object in Memory.
   => Object.getPrototypeOf(x) === Object.getPrototypeOf(y)     True;
   # Finally
   =>(important) So Prototypical Inheritance === When access property or method On Object,, JS        engine walks up the prototype Chain to find the target member.
   

   => Multi level Inheritance     3 level...
      
      let myArray = [];

      (  myArray   =>   ArrayBase   =>    ObjectBase    )



      # another example

      function Circle(radius) {
         this.radius = radius;
         this.draw = function() {
            console.log("draw")
         }
      }

      const circle = new Circle(2);

   =>   (circle    =>    CircleBase    =>    ObjectBase)
   => Objects are created by Given Constructor will have the same prototype.


   
# // ------------------------------------- //

[3] Prototype Descriptor :::
   -> In JS our properties have attributes attached to them,
         sometimes attributes prevent property from enumerated.

      let person = { name: "Muhammed" }

      for (let key in person)
         console.log(key)   // name

      let objectBase = Object.getPrototypeOf(person);
      let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
      console.log(descriptor);

      Object.defineProperty(person, 'name', {
         writable: false,            => can read only, if i changed it late , not matter
         configurable: false,        => can delete or not
         enumerable: false            => show up in Object.keys(person)
      })


      person.name = "Ali"   (X)              because writable is false !
      Object.keys(person)   []               because enumerable is false !
      delete person.name    Nothing happen   because configurable is false !


# // ------------------------------------- //
[4] Constructor Prototypes :::
   => Every object in JS except root Obj .. have parent (prototype)
   => To get prototype of Object USE: 
      
      Object.getPrototypeOf(myObj)    ===    myObj.__proto__   (parent of my obj) (in browser) !

      obj.__proto__
      Object.prototype

   => Constructor also have prototype property ....
      
      circle.__proto__
      Circle.prototype

      arr.__proto__
      Array.prototype

# // ------------------------------------- //
[5] Prototype VS instance members :::
   => It's so not good if i save alot of methods in memory !!

      function Circle(radius) {
         this.radius = radius;
         this.draw = function () {
            console.log("draw")
         }
      };
      const c1 = new Circle(1);
      const c2 = new Circle(1);


   => Solution on the concept of Prototypical Inheritance ..

   -> So Important <-
   > When access on property or method on object, Javascript Engine first looks at Object itself,
      if it cant find this property or method ... 
      it look at the prototype of this Object ..


   => So i will take draw Method from Circle Object and put it in Prototype.
   
      Circle.prototype  ===  c1.__proto__

   => Answer : 

      function Circle(radius) {
            // Instance Members
         this.radius = radius;
      };

         // Prototype Members
      Circle.prototype.draw = function() {
         console.log("draw")
      }

      const c1 = new Circle(1);
      const c2 = new Circle(1);
   
   => It's so good implementation

   => I have ( 2 types ) of property and Methods !

      [1] Instance Members   (property - methods)
      [2] Prototype Members  (property - methods)


   => I can implement toString Method by own 

      Circle.prototype.toString = function() {
         return `Circle with radius ${this.radius}`
      }

   => toString() method is one of Object Methods, But if i implement it inside prototype,
            it will be used because it's more accessible !

   => By these 2 kind (instance - prototype) , i can reference each other !

      function Circle(radius) {
         this.radius = radius;         // instance Member

         this.move = function () {     // instance Member
            this.draw()
            console.log("Move")
         }
      };

      Circle.prototype.draw = function () {      // prototype Member
         // this.move()   
         console.log("draw")
      };

      Circle.prototype.toString = function () {   // prototype Member
         return `This circle with radius ${this.radius}`
      };

      const c1 = new Circle(1);
      c1.draw();
      console.log(c2.toString());


# // ------------------------------------- //
[6] Iterating ( instance-prototype ) Members  ::: important

   => Object.keys(c1)    
         === Return only Instance Members .


   => for (let key in c1) console.log(key)
         === Return ALL Members (Instance(Own) + prototype)


      c1.hasOwnProperty('radius')    = true or false

# // ------------------------------------- //
[7] Avoid modifying built-in Objects in JS 

      Array.prototype.shuffle = function() {
         //,,,
      }

      const array = [];
      array.shuffle();

   => Don't modify Objects i don't own.
   => Don't add, change, remove 