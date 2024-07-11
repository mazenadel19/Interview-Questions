// Write a function that takes an array of integers representing the number of flowers planted in a line, and an integer k representing the number of additional flowers you want to plant. Return whether it's possible to plant all k flowers without planting any two flowers adjacent to each other.

canPlantFlowers([1, 0, 0, 0, 1], 1);
// true // you can plant 1 flower between the others

canPlantFlowers([1, 0, 0, 0, 1], 2);
// false

canPlantFlowers([0, 0, 0, 0, 0], 3);
// true

canPlantFlowers([1, 0, 1, 0, 1], 1);
// false

function canPlantFlowers(flowersArr, k) {
  let flowersToPlant = 0;
  for (let i = 0; i < flowersArr.length;) {
    // if still two positions to plant a flower are left
    if (i + 1 < flowersArr.length) {
      // if neither has a flower
      if (flowersArr[i] + flowersArr[i + 1] !== 1) flowersToPlant++;
      i += 2;
    } else {
      // if it is the last position and the previous position has no flower
      if (flowersArr[i] + flowersArr[i - 1] === 0) flowersToPlant++;
      i++;
    }
  }
  console.log(flowersToPlant === k);
  return flowersToPlant === k;
}
