// function numberToBinary(val) {
//   return val.toString(2);
// }

// let num = 5;
// const result1 = numberToBinary(num);
// console.log(result1);

// let num2 = 1;
// const result12 = numberToBinary(num2);
// console.log(result12);

// let x = 5 | 1;
// console.log(x);
// console.log(2 ** (3 ** 2));

// function checkSwitch(val) {
//   switch (val) {
//     case val == 1:
//       break;
//     case val == 2:
//       break;

//     default:
//       console.log("okay");
//       break;
//   }
// }

// console.log(checkSwitch(2));

// let year = 2001;

// if (year == 2000) {
//   console.log("yeah it's 2000");
// } else {
//   console.log(`whatever it's ${year}`); // any value except 2000
// }

// let message;
// const login = "";
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// const a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log("Too small");
//     break;
//   case 4:
//     console.log("Exactly!");
//     break;
//   case 5:
//     console.log("Too big");
//     break;
//   default:
//     console.log("I don't know such values");
//     break;
// }

// const b = 3;

// switch (b) {
//   case 4:
//     console.log("Right!");
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     console.log("Wrong!");
//     console.log("Why don't you take a math class?");
//     break;

//   default:
//     console.log("The result is strange. Really.");
//     break;
// }

// const languageList = ["English", "Spanish", "German","French"];

// for (let i = 0; i < languageList.length; i++) {
//   console.log(languageList[i]);
//  console.log( languageList.length);
// }

// let i = 0
// while (i < 10) {
//   console.log(i)
//   i++;

// }

// let a = 20
// do {
//   console.warn('repeated')
//   a++
// } while (a < 22);

// let test = {
//   name :"namaawdawde",
//   age: 12,
//   city: "dakor"
// }

// for (const key in test) {
//   test[key]
//   if (Object.hasOwnProperty.call(test, key)){
//     const element = test[key];
//     console.log(element);
//   }
// }

// const demo = ['dalor','paris','macow']
// for (const x of demo) {
//   console.log(x);
// }

let a = [1, 2, 4, 5, 6, 7, 8];

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === 6) continue;
//   console.log(a[i]);
// }

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === 6) break;
//     console.log(a[i]);
//   }
// i = 0;
// var i;
// while (a[i]) {
//   if (a[i] === 6) {
//     i++;
//     continue;
//   }
//   console.log(a[i]);
//   i++;
// }

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
// console.log(fruits);

// console.log(fruits.get("oranges"));
// console.log(
//   fruits.forEach((value, key) => {
//     console.log(value, key);
//   })
// );

// let test1 = new Object({
//   test: 12,
//   demo: "2323",
// });
// test1.constructor(2502);
// console.log(test1.hasOwnProperty("test"));

// for (const key in test1) {
//   if (test1.hasOwnProperty.call(test1, key)) {
//     const element = test1[key];
//     console.log(element);
//   }
// }

// const demo = [1, 2, 3, 4];
// for (const a of demo) {
//   console.log(a);
// }
// const test = {
//   age: 19,
//   address: "jjb  jkjjkj",
//   pinCode: 1255,
// };

// Object.defineProperty(test1, "ssn", {
//   enumerable: false,
//   value: "okay got it",
// });

// let make = new Set([1,2,3,454,5])
// console.log(make.values());
// console.log(make.has('aa'));

// make.add('werr')
// console.log(make);

// for (const test of make) {
//   console.log(test);
// }

/* The comment at the end of the code snippet is providing an explanation or definition related to
enumerable properties in JavaScript. It clarifies that an enumerable property is one that can be
iterated over using a for...in loop or the Object.keys() method. It also mentions that properties
created via simple assignment or a property initializer are enumerable by default, while properties
defined using Object.defineProperty() are not enumerable by default. This comment serves as a
helpful note or reminder about enumerable properties in JavaScript. */

// - Functions, Callback, Arrow, Anonymous Functions,

// function fullName(firstName,lastName,...x){
//   console.log(x);
//   return `${firstName} saras name chhe okay😜 ${lastName}`
//   // return firstName + ' '+lastName;
// }

// function f1(x) {
// console.log(x);
//   function f2(y) {
//     console.log(y);
//     return x* y;
//   }
//   return f2;
// }

// const result = f1(4);
// // console.log(result(6));
// const finalResult =  result(10)
// // console.log(result);
// console.log(finalResult);
// // const name = fullName('Nirav')
// // console.log(name);

// const test = function () {
//   console.log('test');
// }

// console.log(test());
// function result(res) {
//   console.log(res)
// }
// function add(a,b,callBack) {
//   callBack(a+b);
// }

// setTimeout(()=>{console.log('executed');},3000)

// console.warn(add(3,4 ,result))

// function rest() {
//   console.log('hello');
// }

// Recursive function

// function counter(minutes) {
//   console.log(minutes);
//   if (minutes > 0) {
//     minutes--;
//     counter(minutes);
//   } else {
//     console.log("Finally");
//   }
// }
// console.log(counter(5));

// Arrow Function

hello = val => console.log(val);
hello(3)
const test = {
  name : 'nirav',
  age:23,
  demo : function(){
    console.log(this.name);
  }
}

const test2 = {
  name : 'nirav',
  age:23,
  demo : ()=>console.log(this.age) 
  
}
console.log(test.demo());
console.log(test2.demo());


// let ad = setTimeout(he,3000);
// console.log(ad);
// clearTimeout(ad);

function greet(){
  console.log('okay');
}
let timeId = setInterval(greet,200)

setTimeout(function test()  {

  clearInterval(timeId)
}, 1500);


setTimeout(() => {
  
}, timeout);

setTimeout(function() {
  
}, timeout);