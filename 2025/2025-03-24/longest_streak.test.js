import { it, expect } from "vitest";
import { findLongestStreak } from "./longest_streak";

it("should Returns the longest qualifying streak of true values or 0 if none exist", () => {
    expect(findLongestStreak([true, true, false, true, true, true], 3)).toBe(3);
    expect(findLongestStreak([true, true, true, false, true], 4)).toBe(0);
    expect(findLongestStreak([true, true, true, true], 2)).toBe(4);
});
