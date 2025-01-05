import { expect, it } from "vitest";
import { newYearsDay } from "./return_day_of_the_week_of_new_year";

it("should return first day of the year given a year between 1970 and 2038", () => {
  expect(newYearsDay(2025)).toBe("Wednesday");
  expect(newYearsDay(2024)).toBe("Monday");
});

it("should return invalid year error if year is out of range", () => {
  expect(() => newYearsDay(1960)).toThrowError("Invalid year");
  expect(() => newYearsDay(2039)).toThrowError("Invalid year");
});

it("should return 'Year can't be a float' if the input is float", () => {
  expect(() => newYearsDay(2034.5)).toThrowError("Year can't be a float");
});

it("should return 'Year must be a number' if the input is not a number", () => {
  expect(() => newYearsDay("2024")).toThrowError("Year must be a number");
  expect(() => newYearsDay()).toThrowError("Year must be a number");
  expect(() => newYearsDay(null)).toThrowError("Year must be a number");
});
