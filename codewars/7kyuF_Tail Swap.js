/*
You'll be given a list of two strings, and each will contain exactly one colon (":") 
in the middle (but not at beginning or end). The length of the strings, 
before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), 
but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

function tailSwap(arr) {
  // your code here
  var answer = [];
  var str1 = "";
  var str2 = "";
  for (i = 0; i < 2; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (i === 0) {
        if (arr[i][j] === ":") {
          for (k = 0; (k = j); k++) {
            str1 += arr[i][k];
          }
          for (s = j + 1; s < arr[i].length; s++) {
            str2 += arr[i][s];
          }
        }
      } else {
        var c = "";
        c += arr[i][j];
        if (arr[i][j] === ":") {
          c += arr[i][j];
          str2.unshift(c);
        }
        for (s = j + 1; s < arr[i].length; s++) {
          str1 += arr[i][s];
        }
      }
    }
  }
  answer.push(str1);
  answer.push(str2);

  return answer;
}
