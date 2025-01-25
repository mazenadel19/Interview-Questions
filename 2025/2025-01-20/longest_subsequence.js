// Given a list of integers, write a function that finds the longest subsequence
// where the difference between consecutive elements is either 1 or -1. Return the length of this subsequence.

/**
 *
 * @param {number[]} sequeuences
 * @returns {number}
 */
export function longestSubsequence(sequeuences) {
    const longestCandidates = {};
    for (let i = 0; i < sequeuences.length; i++) {
        const nextEl = sequeuences[i + 1];
        if (!nextEl) break;

        for (let j = i; j < sequeuences.length; j++) {
            const nextEl = sequeuences[j + 1];
            if (!nextEl) break;
            const el = sequeuences[j];
            const diff = nextEl - el;
            if (Math.abs(diff) !== 1) break;
            if (!longestCandidates[i]) longestCandidates[i] = [];
            longestCandidates[i].push(el);
        }
    }

    return Math.max(
        ...Object.values(longestCandidates).map((c) => c.length + 1),
        0
    );
}

longestSubsequence([1, 2, 3, 4, 5]);
// > 5
longestSubsequence([4, 2, 3, 1, 5]);
// > 2
longestSubsequence([10, 11, 7, 8, 9, 12]);
// 3
