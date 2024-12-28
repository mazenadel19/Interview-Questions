import { it, expect } from "vitest";
import { countPerfectlyRoundCookies } from "./magic_cookie_factory";

it("determine how many perfectly round cookies will be made when baking with n! ingredients.", () => {
  expect(countPerfectlyRoundCookies(5)).toBe(1);
  expect(countPerfectlyRoundCookies(10)).toBe(2);
  expect(countPerfectlyRoundCookies(100)).toBe(24);
});
