// Write a function that takes an array of integers and a target sum, and returns all unique quadruplets [a, b, c, d] in the array such that a + b + c + d = target. If it's impossible, return an empty array.

fourSum([1, 0, -1, 0, -2, 2], 0);
// [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

fourSum([], 0);
// []

fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11);
// [[-5, -4, -3, 1]]

function fourSum(array, target) {
  if (!array.length || array.length < 4) return [];
  const accumulator = {};
  const results = [];
  for (let i = 0; i < array.length - 1; i++) {
    const firstNo = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNo = array[j];
      const sum = firstNo + secondNo;
      const diff = target - sum;

      if (accumulator[sum]) accumulator[sum].push([firstNo, secondNo]);
      else accumulator[sum] = [[firstNo, secondNo]];

      if (accumulator[diff]) {
        const pairs = accumulator[diff];
        for (const pair of pairs) {
          const res = [firstNo, secondNo, pair[0], pair[1]].sort((a, b) => a - b);
          if (pair[0] !== firstNo && pair[1] !== firstNo && pair[0] !== secondNo && pair[1] !== secondNo) {
            if (results.length) {
              for (const [no1, no2, no3, no4] of results) {
                  const [ res1, res2, res3, res4 ] = res;
                  console.log(res);
                  if (no1 !== res1 && no2 !== res2 && no3 !== res3 && no4 !== res4) {
                  results.push(res);
                }
              }
            } else results.push(res);
          }
        }
      }
    }
  }
//   console.log(results);
}
