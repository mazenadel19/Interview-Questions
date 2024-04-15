// Given a string str, write a function to determine the longest substring containing only two unique characters.

// Example:
uniqueSubstr("eceba");
// 3 // "ece"

uniqueSubstr("ccaabbb");
// 5 // "aabbb"

uniqueSubstr("abcabcabc");
// 2 // "ab", "bc", or "ca"

/**
 * Function to generate a unique substring from the input.
 *
 * @param {string} input
 * @return {number}
 */
function uniqueSubstr(input) {
  const candidates = [];
  for (let i = 0; i < input.length; i++) {
    let uniqueStr = input[i];
    let uniqueCharters = 1;
    for (let j = i + 1; j <= input.length; j++) {
      const secondChar = input[j];
      if (uniqueStr.includes(secondChar)) {
        uniqueStr += secondChar;
      } else if (uniqueCharters < 2) {
        uniqueStr += secondChar;
        uniqueCharters++;
      } else {
        candidates.push(uniqueStr);
        break;
      }
    }
  }

  return candidates.reduce((a, b) => (a.length > b.length ? a : b)).length;
}
