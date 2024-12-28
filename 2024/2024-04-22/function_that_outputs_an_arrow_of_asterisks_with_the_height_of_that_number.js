// Given a direction and a number, write a function that outputs an arrow of asterisks with the height of that number! See the pattern below.
printArrow("right", 3);
// *
//  *
//   *
//  *
// *

printArrow("left", 5);
//     *
//    *
//   *
//  *
// *
//  *
//   *
//    *
//     *

printArrow("up", 2);
//   *
//  * *

function printArrow(direction, number) {
  switch (direction) {
    case "right":
      return printRight(number);
    case "left":
      return printLeft(number);
    case "up":
      return printUp(number);
    case "down":
      return printDown(number);
    default:
      console.log("Invalid direction");
  }
}

function printRight(number) {
  for (let i = 1; i <= number; i++) {
    console.log(" ".repeat(i) + "*");
  }

  for (let i = number - 1; i >= 1; i--) {
    console.log(" ".repeat(i) + "*");
  }
}

function printLeft(number) {
  for (let i = number - 1; i >= 1; i--) {
    console.log(" ".repeat(i) + "*");
  }

  for (let i = 1; i <= number; i++) {
    console.log(" ".repeat(i) + "*");
  }
}

function printUp(number) {
  for (let i = 1; i <= number; i++) {
    console.log(" ".repeat(number - i) + "* ".repeat(i));
  }
}

function printDown(number) {
  for (let i = number; i >= 1; i--) {
    console.log(" ".repeat(number - i) + "* ".repeat(i));
  }
}
