// Given an integer array nums, return the length of the longest increasing subsequence.

increasingSubsequence([10, 9, 2, 3, 7, 101, 18]);
//  4

increasingSubsequence([4, 4, 4, 4, 3]);
// 1

function increasingSubsequence(nums) {
    let longestSequence = 0;
    let currentSequence = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[ i ] > nums[ i - 1 ]) {
            currentSequence++;
        } else {
            longestSequence = currentSequence > longestSequence ? currentSequence : longestSequence;
            currentSequence = 1;
        }
    }
    console.log(longestSequence)
    return longestSequence;
}
