/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


*/

function firstNonRepeatingLetter(s) {
    if(!s) {
    return "";
  }
  
  let obj = {}
  let str = s.toLowerCase();
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if(!obj[str[i]]) {
      obj[str[i]] = 0;
    }
    obj[str[i]]++;
  }
  
  for (let key in obj) {
    if(obj[key] === 1) {
      answer = key;
      break;
    }
  }
  if(!answer) {
    return "";
  }
  
  let upperAnswer = answer.toUpperCase();
  
  if (s.indexOf(answer) !== -1) {
    return s[s.indexOf(answer)];
  }
  if (s.indexOf(upperAnswer) !== -1) {
    return s[s.indexOf(upperAnswer)];
  }
  
  return "";
}
