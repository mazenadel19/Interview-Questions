"use strict";
// Write a program that implements the DelayedTaskExecutor interface defined below. Think about how it would work if you ran the exec function multiple times in a row, before the task is run!
class Task {
  constructor(timeString) {
    this.timeStamp = this.convertToTimestamp(timeString);
  }
  run() {
    console.log(`Task running at ${new Date().toLocaleTimeString()}`);
  }
  convertToTimestamp(timeString) {
    const now = new Date();
    const [time, modifier] = timeString.split(/(am|pm)/i);
    const [hours, minutes] = time.split(":").map(Number);
    let adjustedHours = hours;
    if (modifier.toLowerCase() === "pm" && hours < 12) {
      adjustedHours += 12;
    }
    if (modifier.toLowerCase() === "am" && hours === 12) {
      adjustedHours = 0;
    }
    const taskDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      adjustedHours,
      minutes
    );
    return taskDate.getTime();
  }
}
function DelayedTaskExecutor() {
  return {
    exec(task) {
      const delay = task.timeStamp - Date.now();
      if (delay > 0) {
        setTimeout(() => task.run(), delay);
      } else {
        console.log("Timestamp is in the past. Task will not be executed.");
      }
    },
  };
}
const executor = DelayedTaskExecutor();
// usage
executor.exec(new Task("10:00am"));
executor.exec(new Task("10:10am"));
executor.exec(new Task("10:05am"));
