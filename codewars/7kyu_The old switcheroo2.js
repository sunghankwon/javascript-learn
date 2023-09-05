/*
This is a follow up from my kata The old switcheroo

Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()
*/

function encode(str) {
  //code me
  var answer = "";
  for (i = 0; i < str.length; i++) {
    var index = 0;
    let asci = str[i].charCodeAt(index);
    if (asci >= 65 && asci < 91) {
      let Acount = asci - 64;
      answer += Acount;
    } else if (asci >= 97 && asci < 123) {
      let acount = asci - 96;
      answer += acount;
    } else {
      answer += str[i];
    }
  }
  return answer;
}
