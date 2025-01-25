import { it, expect } from "vitest";
import { longestSubsequence } from "./longest_subsequence";

it("should return the length of the longest subsequence where the difference between consecutive elements is either 1 or -1", () => {
    expect(longestSubsequence([1, 2, 3, 4, 5])).toBe(5);
    expect(longestSubsequence([4, 2, 3, 1, 5])).toBe(2);
    expect(longestSubsequence([10, 11, 7, 8, 9, 12])).toBe(3);
});
