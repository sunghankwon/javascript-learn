/*
  
  < 묻고 더블로 >

  숫자 요소로 이루어진 배열이 인자로 주어졌을 때, 다음과 같은 조건을 만족하는 함수를 작성해 주세요!

  📌 배열의 요소가 2번 반복되는 새로운 배열이 반환되어야 합니다.
  📌 반환된 배열은 인자로 들어간 배열 길이의 2배가 되어야 합니다.
  📌 빈 배열이 주어질 경우는 고려하지 않아도 됩니다.


  +--------------------------------------------------------------------+
  |                arr                   |            리턴 값            |
  +--------------------------------------------------------------------+  
  |               [1, 2]                 |         [1, 2, 1, 2]        |
  +--------------------------------------------------------------------+                   
  |              [1, 2, 3]               |      [1, 2, 3, 1, 2, 3]     |
  +--------------------------------------------------------------------+  
  |             [5, 7, 3, 1]             |   [5, 7, 3, 1, 5, 7, 3, 1]  |
  +--------------------------------------------------------------------+

*/

const arr1 = [1, 2, 1];
const arr2 = [1, 3, 5, 3, 1];
const arr3 = [1, 6, 8, 4, 2, 3];

function doubleArray(arr) {
  let arrcopy = [];
  for (i = 0; i < arr.length; i++) {
    arrcopy.push(arr[i]);
  }
  let arrsum = arr.concat(arrcopy);
  return arrsum;
}

const result1 = doubleArray(arr1); // [1, 2, 1, 1, 2, 1]를 반환해야 합니다.
const result2 = doubleArray(arr2); // [1, 3, 5, 3, 1, 1, 3, 5, 3, 1]를 반환해야 합니다.
const result3 = doubleArray(arr3); // [1, 6, 8, 4, 2, 3, 1, 6, 8, 4, 2, 3]를 반환해야 합니다.

if (
  checkResult(result1, arr1) &&
  checkResult(result2, arr2) &&
  checkResult(result3, arr3)
) {
  alert("🎉");
}

// 결과값 확인을 위한 함수이니 신경쓰지 않으셔도 됩니다.

function checkResult(result, arr) {
  if (result.length !== arr.length * 2) {
    return false;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== arr[i % arr.length]) {
      return false;
    }
  }

  return true;
}
