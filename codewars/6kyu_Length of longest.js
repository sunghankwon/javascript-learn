/*
Find the length of longest subsequence of same incrementing values in a string !

What is this ?

in 10 11 12 it is 3. Because the 3 numbers are obtained by increments of 1 from the initial number of the sequence.

in 10 11 12 7 it still is 3 . Won by the subsequence 10 11 12 which is the longest sequence of number following each other incremented by the same number: 1

in 1 3 9 it is 2. Either won by 1 3(+2) or 3 9 (+6).

in 7 8 9 2 5 8 11 the longest chain length is 4 won by 2 5 8 11 (same increment of 3 between them)

in 1 3 9 15 21 7 8 2 3 4 result is 4 won by 3 9 15 21 (incremented by 6)

The numbers in the chain will only be positive or negative integers separated by a space.
*/

//Find the length of longest subsequence of same incrementing values
function longestSequenceIn(string) {
  const arr = string.split(" ");
  let sameinc = 1;
  let nowsameinc = 1;
  let increment = 0;
  let nowincre = 0;

  if (string === "") {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i === 1) {
        increment = arr[i] - arr[i - 1];
        nowincre = arr[i] - arr[i - 1];
        sameinc++;
        nowsameinc++;
      }
      if (i > 1) {
        nowincre = arr[i] - arr[i - 1];
        if (nowincre === increment) {
          nowsameinc++;
          if (nowsameinc > sameinc) {
            sameinc = nowsameinc;
          }
        } else {
          nowsameinc = 2;
          increment = arr[i] - arr[i - 1];
        }
      }
    }
    return sameinc;
  }
}
