// Write a function that takes an array of daily temperatures and returns an array where each element is the number of days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

dailyTemperatures([70, 70, 70, 75]);
// [3, 2, 1, 0]

dailyTemperatures([90, 80, 70, 60]);
// [0, 0, 0, 0]

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
// [1, 1, 4, 2, 1, 1, 0, 0]

function dailyTemperatures(temperatures) {
  const results = [];
  for (let index = 0; index < temperatures.length; index++) {
    const temperature = temperatures[index];
    let higherTemperatureIndex = 0;
    for (let i = index + 1; i < temperatures.length; i++) {
      if (temperatures[i] > temperature) {
        higherTemperatureIndex = i;
        break;
      }
    }
    results.push(higherTemperatureIndex === 0 ? 0 : higherTemperatureIndex - index);
  }
  console.log(results);
  return results;
}
