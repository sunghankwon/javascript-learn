/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
    let hour;
    let minute;
    let second;
    
    if (seconds < 60) {
      minute = 0;
      second = seconds;
    }
    
    if (seconds >= 60) {
      minute = Math.floor(seconds / 60);
      second = seconds % 60; 
    }
     
    if (minute < 60) {
      hour = 0;
    }
    
    if (minute >= 60) {
      hour = Math.floor(minute / 60);
      minute = minute % 60;
    }
    
    let arr = [hour, minute, second]
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 10) {
        arr[i] = "0" + arr[i];
      }
    }
    
    const result = `${arr[0]}:${arr[1]}:${arr[2]}`;
    
    return result;
  }