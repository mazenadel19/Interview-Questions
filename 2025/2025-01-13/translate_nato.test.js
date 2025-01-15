import { expect, it } from "vitest";
import { natoify } from "./translate_nato";

it("return 'Invalid Input' error if input is not a string", () => {
    expect(() => natoify()).toThrowError("Invalid Input");
    expect(() => natoify(null)).toThrowError("Invalid Input");
    expect(() => natoify(123)).toThrowError("Invalid Input");
    expect(() => natoify([])).toThrowError("Invalid Input");
    expect(() => natoify({})).toThrowError("Invalid Input");
});

it("should translate input correctly", () => {
    expect(natoify("hello world")).toBe(
        "Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta"
    );
    expect(natoify("3spooky5me")).toBe(
        "Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo"
    );
});
