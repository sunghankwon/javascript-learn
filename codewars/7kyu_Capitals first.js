/*
Create a function that takes an input String and returns a String, 
where all the uppercase words of the input String are in front and all the lowercase words at the end. 
The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
*/

function capitalsFirst(str) {
  // ...
  let answer = "";
  const arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0].charCodeAt() > 64 && arr[i][0].charCodeAt() < 91) {
      answer += arr[i] + " ";
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0].charCodeAt() > 96 && arr[i][0].charCodeAt() < 123) {
      answer += arr[i] + " ";
    }
  }
  answer = answer.slice(0, -1);
  return answer;
}
