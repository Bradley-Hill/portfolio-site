const myFirstObject = {
  name:{
    first: 'Bob',
    second: 'Smith',
  },
  age: 69,
  bio() {
    console.log(`${this.name.first} ${this.name.second} is ${this.age} years old`);
  },
  introduceSelf() {
    console.log(`Hi, I'm ${this.name[0]} ${this.name[1]}.`);
  },
}; 