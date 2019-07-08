// let person1 = { name: "Muhammed" }
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// // // console.log(descriptor);

// ----------------------- //

let person2 = { name: "Muhammed" }

Object.defineProperty(person2, 'name', {
   writable: false,
   configurable: false,
   enumerable: false
})

person2.name = "Ali"

console.log(person2.name)
console.log(Object.keys(person2));
delete person2.name

