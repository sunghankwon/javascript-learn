/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: 
The number I'm afraid of depends on which day of the week it is... 
This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)


*/

var AmIAfraid = function (day, num) {
  //Help me...
  var answer;
  if ((day = "Monday")) {
    if (num === 12) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if ((day = "Tuesday")) {
    if (num > 95) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if ((day = "Wednesday")) {
    if (num === 34) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if ((day = "Thursday")) {
    if (num === 0) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if ((day = "Friday")) {
    if (num % 2 === 0) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if ((day = "Saturday")) {
    if (num === 56) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if ((day = "Sunday")) {
    if (num === 666 || num === -666) {
      answer = true;
    } else {
      answer = false;
    }
  }

  return answer;
};