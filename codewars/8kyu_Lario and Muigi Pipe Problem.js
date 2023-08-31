/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, 
return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers) {
  var min, max;
  var arr = [];
  for (i = 0; i < numbers.length; i++) {
    if (min === undefined && max === undefined) {
      min = numbers[i];
      max = numbers[i];
    } else if (min > numbers[i]) {
      min = numbers[i];
    } else if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  for (i = min; i < max + 1; i++) {
    arr.push(i);
  }
  return arr;
}
