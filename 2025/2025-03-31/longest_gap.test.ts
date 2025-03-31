import { expect, it } from "vitest";
import { findLongestTimeGap } from "./longest_gap";

it("should return zero if timestamps array has one element", () => {
    expect(findLongestTimeGap(["12:00"])).toBe(0);
});

it("should return biggest difference if timestamps array has more than one element", () => {
    expect(findLongestTimeGap(["09:00", "11:00"])).toBe(120);
    expect(findLongestTimeGap(["14:00", "09:00", "15:00", "10:30"])).toBe(210);
    expect(findLongestTimeGap(["08:00", "10:00", "10:00", "14:00"])).toBe(240);
});
