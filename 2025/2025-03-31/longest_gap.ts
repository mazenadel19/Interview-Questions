// Write a function that takes an array of timestamps (HH:MM) from the same day and returns the longest gap in minutes between consecutive timestamps.

export function findLongestTimeGap(timestamps: string[]): number {
    if (timestamps.length === 1) return 0;
    const minStamps = timestamps.map((timestamp) => timeToMin(timestamp));
    const sortedMinStamps = minStamps.toSorted((a, b) => a - b);
    const longestGap = sortedMinStamps.reduce((a, c, i) => {
        if (sortedMinStamps[i - 1]) {
            const diff = c - sortedMinStamps[i - 1];
            a = diff > a ? diff : a;
        }
        return a;
    }, 0);
    return longestGap;
}

function timeToMin(timestamp: string): number {
    const [hours, mins] = timestamp.split(":");
    return parseInt(hours) * 60 + parseInt(mins);
}
