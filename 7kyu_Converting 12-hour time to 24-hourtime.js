/*
Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, 
right? Well, let's see if you can do it!

You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), 
a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.

Notes
By convention, noon is 12:00 pm, and midnight is 12:00 am.
On 12-hours clock, there is no 0 hour, 
and time just after midnight is denoted as, 
for example, 12:15 am. On 24-hour clock, this translates to 0015.
*/

function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
  var time = "";
  if (period === "am") {
    if (hour < 10) {
      time += "0" + hour;
    } else if (hour >= 10 && hour < 12) {
      time += hour;
    } else {
      time += "00";
    }
  } else {
    if (hour === 12) {
      time += hour;
    } else {
      hour += 12;
      time += hour;
    }
  }
  if (minute < 10) {
    time += "0" + minute;
  } else {
    time += minute;
  }

  return time;
}
