// Write a function that finds the longest streak of consecutive true values in a boolean array
// that meets or exceeds a given streak goal. Return 0 if no such streak exists.

/**
 *
 * @param {number[]} arr
 * @param {number} goal
 * @returns number
 */
export function findLongestStreak(arr, goal) {
    let longestStreak = 0;
    let currentStreak = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] ? currentStreak++ : (currentStreak = 0);
        longestStreak =
            currentStreak > longestStreak ? currentStreak : longestStreak;
    }

    return goal > longestStreak ? 0 : longestStreak;
}
