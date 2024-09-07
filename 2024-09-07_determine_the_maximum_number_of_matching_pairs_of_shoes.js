// You are given an array of strings representing a collection of shoes. Each shoe is labeled with its type ("L" for left or "R" for right) and its size. Determine the maximum number of matching pairs of shoes that can be formed.

maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"]);
// 3

maxPairs(["L-10", "L-11", "L-12", "L-13"]);
// 0

maxPairs(["L-8", "L-8", "L-8", "R-8"]);
// 1

/**
 * @param {Array<string>} shoes - An array of strings representing shoes, where each string is in the format "L-<size>" or "R-<size>".
 * @return {number} The maximum number of matching pairs of shoes that can be formed.
 */
function maxPairs(shoes) {
  let numberOfPairs = 0;
  const pairs = { L: {}, R: {} };
  for (const shoe of shoes) {
    const [type, size] = shoe.split("-");
    pairs[type][size] = (pairs[type][size] || 0) + 1;
  }

  const sizes = Object.keys(pairs.L);
  for (const size of sizes) {
    if (pairs.R[size]) {
      numberOfPairs += Math.min(pairs.L[size], pairs.R[size]);
    }
  }

  return numberOfPairs;
}
