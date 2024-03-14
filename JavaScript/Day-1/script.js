// const data = (a, b) => {
//   return a + b;
// };
// const dataNew = function (a, b) {
//   return a + b;
// };

// console.log(data(3, 5), "Arrow func");
// console.log(dataNew(6, 7), "Regular FUnc");

// constructor function

function UserDetails(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.date = new Date();
}

UserDetails.prototype.getMonth = function () {
  return this.date.getMonth();
};
const niravDetails = new UserDetails("Nirav", 24, "Bayad");
const xyz = new UserDetails("Mango", 22, "Delhi");
xyz.city = "Mumbai";
// console.log(xyz);

let nirav = "I am your js instructor🥱";
console.log(nirav.split("").reverse().join(""));

const test = "Mr. Owl ate my metal worm.";
console.log(test.split("").reverse().join(""));

console.log(niravDetails, xyz);

// setTimeout(() => {
// }, 3000);

// **  How to initiate class in Js and used in you js for the better code access and organize your code
class Aditi {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  getFullName() {
    return `Yout full name ${this.name}, you lived in city ${this.city}`;
  }
}
//** set the class refernce on variable and get he prototype property from the variable */
const learnClass = new Aditi("Aditi", 22, "Delhi");
console.log(learnClass);
console.log(learnClass.getFullName());
