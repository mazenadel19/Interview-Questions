// Make a translation function for the NATO phonetic alphabet.
// Extra credit: Get creative with the variants!

import { NATO_DICTIONARY } from "./constants";

/**
 * @param {string} str
 * @param {string} variants
 * @returns {string}
 */

const dictionary = {
    default: NATO_DICTIONARY,
    // other variants here
};

export function natoify(str, variant = "default") {
    if (typeof str !== "string") throw new Error("Invalid Input");

    const selectedDictionary = dictionary[variant];
    const characters = str.split("");
    const translation = characters.map((char) => {
        const upperChar = char.toUpperCase();
        if (selectedDictionary[upperChar]) return selectedDictionary[upperChar];
        if (char === " ") return "(space)";
        return `[${char}]`;
    });
    return translation.join(" ");
}

natoify("hello world");
// "Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta"
natoify("3spooky5me");
// "Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo";
