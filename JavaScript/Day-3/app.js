// Block scope => var don't follow block scope, let and const follow
// Function scope = > all follow
// Global scope

// !Block scope => var don't follow block scope, let and const follow
// let a= 20;
// if(a =20){
//     let b = 20
//     const a = 20
//     var ab = 30;
// }

// console.log(ab);
// console.log(b);

//! Function scope  => all variable follow
// function test() {
//   var a = 30;
//   let ab = 20;
//   const y = 30;
//   console.log(a, ab, y);
// }
// console.log(test());
// console.log(a, ab, y);

// Undeclared variable when you assign value it becomes global don't follow scopes
// function scopeDemo() {
//   carName = "volvo";
// }
// console.log(scopeDemo());
// console.log(carName);
//! Global scope
// declare Global Variable

// Hoisiting

x = 5;
var x;
console.log(x);
//  => Only declarations are hoisted, not assignments. This means that the following code will not work:
// console.log(a(10, 20));
// let a = function (a, b) {
//   return a + b;
// };

// Due to hoisting we can acccess the declaration
// console.log(hoisitngDemo(121));
// function hoisitngDemo(a) {
//   return a % 5;
// }


// function makeChange() {
//     console.log();
//   }
//   let a = 30;
//   let b = 40;
//   const demo = a => a + b;
//   console.log(demo(300));
  