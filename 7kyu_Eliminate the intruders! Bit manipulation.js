/*
You are given a string representing a number in binary. 
Your task is to delete all the unset bits in this string and return the corresponding number 
(after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0

*/

function eliminateUnsetBits(number) {
  // your code here
  var answer = "";
  for (i = 0; i < number.length; i++) {
    if (number[i] === "0") {
      continue;
    } else {
      answer += number[i];
    }
  }
  if (answer === "") {
    answer = "0";
  }
  var decimal = parseInt(answer, 2);
  //parselnt(x, n) -> n진수에서 10진수로 변경
  return decimal;
}
