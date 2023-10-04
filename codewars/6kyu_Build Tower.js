/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
  // build here
  let arr = [];
  let max = nFloors * 2 - 1;
  for (let i = 0; i < nFloors; i++) {
    let str = "";
    let count = nFloors - 1;
    for (let j = 0; j < max; j++) {
      if (j >= count - i && count + i >= j) {
        str += "*";
      } else {
        str += " ";
      }
    }
    arr.push(str);
  }
  return arr;
}
