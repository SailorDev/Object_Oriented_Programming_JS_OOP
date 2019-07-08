let employee = {
   base_salary: 30000,
   overtime: 10,
   rate: 20,
   getWage: function () {
      return this.base_salary + (this.overtime * this.rate);
   }
}

console.log(employee.getWage());