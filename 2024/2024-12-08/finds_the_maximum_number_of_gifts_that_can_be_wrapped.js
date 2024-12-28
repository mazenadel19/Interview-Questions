// Write a function wrapGifts that finds the maximum number of gifts that can be wrapped using a single strip of wrapping paper of a given width. Each gift has a specific length, and you can only wrap gifts if their total length fits within the paper width without cutting the paper.

wrapGifts([2, 3, 4, 5], 7);
// 2 // either gifts 2 and 5, or 3 and 4.

wrapGifts([1, 1, 1, 1, 1, 1, 1], 3);
// 3

wrapGifts([1, 2, 3, 4, 5], 6);
// 3 // 1 and 2 and 3

/**
 *
 * @param {number[]} gifts
 * @param {number} maxWeight
 * @return {number}
 */
function wrapGifts(gifts, maxWeight) {
  const sortedGifts = gifts.toSorted((a, b) => a - b);
  let currentWeight = 0;
  let numberOfGifts = 0;
  for (const gift of sortedGifts) {
    if (currentWeight + gift <= maxWeight) {
      currentWeight += gift;
      numberOfGifts++;
    }
  }
  console.log(numberOfGifts);
  return numberOfGifts;
}
