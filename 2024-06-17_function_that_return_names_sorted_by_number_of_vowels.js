// Write a function that takes a list of names and returns the names sorted by the number of vowels in each name in descending order. If two names have the same number of vowels, sort them alphabetically.

sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"]);
//  ["Piccolo", "Vegeta", "Gohan", "Goku"]

sortNames(["Edward", "Alphonse", "Roy", "Winry"]);
// ["Alphonse", "Edward", "Winry", "Roy"]

function sortNames(arr) {
  const vowels = ["a", "e", "i", "o", "u"];
  const sorted = arr.toSorted((a, b) => {
    const aVowels = a.split("").filter((x) => vowels.includes(x)).length;
    const bVowels = b.split("").filter((x) => vowels.includes(x)).length;
    return aVowels === bVowels ? a.localeCompare(b) : bVowels - aVowels;
  });
  console.log(sorted);
  return sorted;
}
