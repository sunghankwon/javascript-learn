/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/

function findUniq(arr) {
  // do magic
  let diffNum;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]]++;
  }
  for (let same in obj) {
    if (obj[same] === 1) {
      diffNum = same;
      break;
    }
  }
  diffNum = Number(diffNum);
  return diffNum;
}
