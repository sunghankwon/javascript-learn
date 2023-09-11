var AmIAfraid = function (day, num) {
  //Help me...
  var answer;
  if (day === "Monday") {
    if (num === 12) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if (day === "Tuesday") {
    if (num > 95) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if (day === "Wednesday") {
    if (num === 34) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if (day === "Thursday") {
    if (num === 0) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if (day === "Friday") {
    if (num % 2 === 0 || num === 2) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if (day === "Saturday") {
    if (num === 56) {
      answer = true;
    } else {
      answer = false;
    }
  }
  if (day === "Sunday") {
    if (num === 666 || num === -666) {
      answer = true;
    } else {
      answer = false;
    }
  }

  return answer;
};
