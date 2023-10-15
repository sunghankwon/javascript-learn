/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same.


*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    function check(str) {
      if (str[0] != ":" && str[0] != ";") {
        return false;
      }
      if (str.length === 2) {
        if (str[1] === "D" || str[1] === ")") {
          return true;
        } else {
          return false;
        }
      }
      if (str[1] === "-" || str[1] === "~") {
        if (str[2] === "D" || str[2] === ")") {
          return true;
        }
        return false;
      }
      return false;
    }

    if (check(arr[i])) {
      answer++;
    }
  }
  return answer;
}
