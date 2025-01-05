// Given a year, return the day of the week for New Year's Day of that year.

function isFloat(value) {
  return typeof value === "number" && !Number.isInteger(value) && !isNaN(value);
}

export function newYearsDay(year) {
  if (typeof year !== "number") {
    throw new Error("Year must be a number");
  }

  if (isFloat(year)) {
    throw new Error("Year can't be a float");
  }
  if (year < 1970 || year > 2038) {
    throw new Error("Invalid year");
  }

  const date = new Date(year, 0, 1);
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfTheWeek[date.getDay()];
}

newYearsDay(2025);
// > "Wednesday"

newYearsDay(2024);
// > "Monday"
