//Write a "word wrapping" function that takes in a string and the maximum width of a line of text, and return the text "wrapped" to that line length. Include dashes for broken words (which is included in the length of that line), and don't let a line start with a non-alphanumeric character.

let string = `Hello, world! I am hungry.`;

wrap(string);

function wrap(str) {
  const strLength = str.length;
  if (strLength < 10) return str;
  const strArr = str.split("");

  for (let index = 10; index < strLength; index += 10) {
    const tenthChar = strArr[index - 1];
    const ninthChar = strArr[index - 2];
    if (ninthChar !== " " && tenthChar !== " ") {
      strArr[index - 2] = ninthChar + "-\n";
    } else {
      strArr[index - 2] = ninthChar + "\n";
    }
  }
  return console.log(strArr.join(""));
}
