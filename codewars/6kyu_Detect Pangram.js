/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string) {
  //...
  string = string.toUpperCase();
  let obj = {};
  let answer = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i].charCodeAt() > 64 && string[i].charCodeAt() < 91) {
      if (!obj[string[i]]) {
        obj[string[i]] = 0;
      }
      obj[string[i]]++;
    }
  }
  if (Object.keys(obj).length === 26) {
    answer = true;
  }

  return answer;
}
