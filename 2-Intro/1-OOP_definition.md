# Introduction #

[1] OOP => Is Programming Paradigm Centered Around Objects Rather than Functions ...

   - It's not new language or not a tool .
   - It's Style of programming or Paradigm from 70's .
   - There are Some Languages Which support OOP 
         (C# , Ruby, Python, Java, Javascript)
   - Many of frameworks designed by Object Oriented Programming like Angular.
   - Very Important in Interviews .
   - As Technical Interview, it's so fancy and put you on sight of job.


# Four Pillars for OOP #
[2] 4 pillars for Object Oriented Programming : (important Question for interview)
   1- Encapsulation
   2- Abstraction
   3- Inheritance
   4- Polymorphism


   => Before OOP, we had Procedural Programming which divided program into set of functions.
   => even Program become bigger and bigger, which function growth. this will make problems
   => OOP Solve this problems, it's combined group of variable and functions into a (unit === Object).
      => These variable called (Property)
      => And Functions called  (Methods)


# @ Encapsulation @  --- * Reduce Complexity and increase reusability
==> In OOP, i group variable and functions which operate on them into unit(object)  === Encapsulation !
   -> The Best Function which are with No Parameters -- Nice 
   
   let employee = {
      base_salary: 30000,
      overtime: 10,
      rate: 20,
      getWage: function () {     // look here there is no parameters!! it good rather than procedures way !
         return this.base_salary + (this.overtime * this.rate);
      }
   }

   console.log(employee.getWage());

# @ Abstraction @  --- * Reduce Complexity and Isolate the impact of change 
==> We Can hide some of properties and methods from the outside! which give us benefits !
         - Simpler Interface.
         - Reduce the Impact of Change.



# @ Inheritance @   --- * Eliminate Redundant Code
==> It's Mechanism Allow us to Eliminate Redundant Code 
   - Like in innerHTML 
   - Make Bigger Class and make subclasses to inherits from big one !



# @ Polymorphism @   --- * Refactor Ugly Switch/case Statements 
==> It's Technique allow us to git rid of long (if , else) (switch, case)
   