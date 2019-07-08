// Filter an array of numbers which returns only even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


// Filtering an array of object in Javascript
const employees = [
   { name: 'Joe', salary: '12000' },
   { name: 'Dave', salary: '15000' },
   { name: 'Rohit', salary: '15000' },
   { name: 'Grace', salary: '12000' },
   { name: 'Sachin', salary: '25000' },
   { name: 'Leo', salary: '20000' }
];
const filterArr = employees.filter(employee => employee.salary > 15000);
console.log(filterArr);


const name3Letters = employees.filter(employee => employee.name.length === 3);
console.log(name3Letters);