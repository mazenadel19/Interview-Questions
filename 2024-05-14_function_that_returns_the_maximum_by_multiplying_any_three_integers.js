// Write a function that takes in a list (of length >= 3) of numbers, and returns the maximum product that can be obtained by multiplying any three integers from the list.

maxProduct([2, 4, 1, 3, -5, 6])
// > 72 // 4*3*6

function maxProduct(arrayOfNumbers) {
  const sortedValues = arrayOfNumbers.toSorted((a, b) => a - b);
  return sortedValues.at(-1) * sortedValues.at(-2) * sortedValues.at(-3)
}