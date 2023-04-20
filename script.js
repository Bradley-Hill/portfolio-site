function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    return `Hello, said ${this.name} the ${this.breed}.`;
  };
}

Cat3 = new Cat('Rupert', 'Siamese', 'white');
Cat4 = new Cat('Jenkins', 'Moggy', 'ginger');

console.log(Cat3.greeting());
console.log(Cat4.greeting());

const unusedVariable = 42; 
