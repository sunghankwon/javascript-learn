/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, 
except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!

*/

function solve(arr) {
  //..
  const set = new Set(arr);
  let arr2 = Array.from(set);
  let removeArr = [];
  let answer = 0;
  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr2[i] * -1 === arr2[j]) {
        removeArr.push(arr2[i]);
        removeArr.push(arr2[j]);
      }
    }
  }
  let removeSet = new Set(removeArr);
  let removeArr2 = Array.from(removeSet);

  for (i = 0; i < removeArr2.length; i++) {
    let findIndex = arr2.indexOf(removeArr2[i]);
    if (findIndex > -1) {
      arr2.splice(findIndex, 1);
    }
  }
  answer = arr2[0];
  return answer;
}
