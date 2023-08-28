/*
Given a string, you have to return a string in which each character 
(case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

*/

function doubleChar(str) {
  // Your code here
  var answer;
  for (i = 0; i < str.length; i++) {
    if (answer === undefined) {
      answer = str[i];
      answer += str[i];
    } else {
      answer += str[i];
      answer += str[i];
    }
  }
  return answer;
}
