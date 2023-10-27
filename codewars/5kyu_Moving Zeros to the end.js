/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/


function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result.push(arr[i]);
      }
      if (arr[i] === 0) {
        zeroCount++;
      }
    }  
    
    for (let i = 0; i < zeroCount; i++) {
      result.push(0);
    }
    
    return result;
  }
  

