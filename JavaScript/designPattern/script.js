// Problem statement
// *****
// *****
// *****
// *****
// *****

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// printing the string
// console.log(string);

//**Design Pattern One */
// function printPattern(n) {
//   let string = "";

//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);
// }
// console.log(printPattern(4));

// *****
// *   *
// *   *
// *   *
// *****
// ** Design Pattern Second*/
// function secondDesign(n) {
//   let string = "";

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//     string += "\n";
//   }
//   console.log(string);
// }
// console.log(secondDesign(5));

// Third Design Pattern
//     *
//    **
//   ***
//  ****
// *****

// function thirdDesign(n) {
//   let string = "";

//   for (let i = 0; i <= n; i++) {
//     // printing spaces
//     console.log(i);
//     for (let j = 0; j < n - i; j++) {
//       string += " ";
//       console.log(j);
//     }
//     // printing star
//     for (let k = 0; k < i; k++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);
// }

function thirdDesign(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string, "demo");
}
console.log(thirdDesign(5));

// *
// **
// ***
// ****
// *****

function forthDesign(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        string += "*";
      } else string += " ";
    }
    string += "\n";
  }

  console.log(string);
}

console.log(forthDesign(5));

// *****
// ****
// ***
// **
// *

function fifthPattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      // Logic will go inside this loop => Most of the cases
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

console.log(fifthPattern(5));

// *********
//  *******
//   *****
//    ***
//     *

function sixthPattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    // This loop to insert the empty string at start
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    // n=5
    // 5-0 = 5
    // 5*2 = 10
    // 10 -1 = 9 = > 9 stars will print at index 0 Parent loop
    // This loop will insert the asteric and we break when the required stars are added
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      string += "*"; // Logic will go inside this loop => Most of the cases
    }
    string += "\n";
  }
  console.log(string);
}

console.log(sixthPattern(5));

// *
// **
// * *
// *  *
// *   *
// ******

function seventhPattern(n) {
  let string = "";

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) string += "*";
      else {
        if (j === 0 || j == i - 1) string += "*";
        else string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}
console.log(seventhPattern(5));
