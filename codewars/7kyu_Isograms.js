/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
  //...
  let strUpper = str.toUpperCase();
  let obj = {};
  let answer = true;

  for (let i = 0; i < strUpper.length; i++) {
    if (!obj[strUpper[i]]) {
      obj[strUpper[i]] = 0;
    }
    obj[strUpper[i]]++;
  }
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (obj[strUpper[i]] > 1) {
      answer = false;
      break;
    }
  }
  return answer;
}
