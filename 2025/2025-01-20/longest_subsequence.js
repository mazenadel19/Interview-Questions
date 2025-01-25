// Given a list of integers, write a function that finds the longest subsequence
// where the difference between consecutive elements is either 1 or -1. Return the length of this subsequence.

/**
 * @param {number[]} sequences
 * @returns {number}
 */
export function longestSubsequence(sequences) {
    if (!sequences.length) return 0;

    let maxLength = 1;
    let currentLength = 1;

    for (let i = 1; i < sequences.length; i++) {
        const diff = Math.abs(sequences[i] - sequences[i - 1]);

        if (diff === 1) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 1;
        }
    }

    return maxLength;
}

longestSubsequence([1, 2, 3, 4, 5]);
// > 5
longestSubsequence([4, 2, 3, 1, 5]);
// > 2
longestSubsequence([10, 11, 7, 8, 9, 12]);
// 3
