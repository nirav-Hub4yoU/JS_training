// *****
// *****
// *****
// *****
// *****

function firstPattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
console.log(firstPattern(5));

// *****
// *   *
// *   *
// *   *
// *****

function secondPattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (i == 0 || i == n - 1 || k == 0 || k == n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}
console.log(secondPattern(5));

//      *
//     **
//    ***
//   ****
//  *****

function thirdPattern(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1) string += "*";
      else string += " ";
    }
    string += "\n";
  }
  console.log(string);
}
console.log(thirdPattern(5));

// *
// **
// ***
// ****
// *****

function forthPattern(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      if (k <= i) string += "*";
      else string += " ";
    }
    string += "\n";
  }
  console.log(string);
}
console.log(forthPattern(5));

// *****
// ****
// ***
// **
// *

function fifthPattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
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
    for (let j = 0; j < i; j++) {
      string += " ";
    }

    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      string += "*";
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
        if (j === 0 || j === (i - 1)) string += "*";
        else string += " ";
      }
    }
    string += "\n"
  }
  console.log(string);
}
console.log(seventhPattern(5))
