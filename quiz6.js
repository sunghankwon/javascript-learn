/*

  < 객체 만들기 >

  첫 번째 인자로 문자열로 이루어진 배열, 두 번째 인자로 숫자로 이루어진 배열이 들어왔을 때,

  두 가지 배열의 각 요소를 key, value로 가지는 객체를 생성하려 합니다.

  다음과 같은 조건을 만족하는 함수를 작성해 주세요!

  📌 객체를 반환해야 합니다.
  📌 객체의 key 값은 arr1의 요소가 됩니다.
  📌 객체의 value 값은 arr2의 요소가 됩니다.
  📌 arr1, arr2 배열의 길이는 같습니다.
  📌 아래 예시를 참고해 주세요.


  +--------------------------------------------------------------------+
  |              arr1, arr2              |            리턴 값            |
  +--------------------------------------------------------------------+  
  |      ["A", "B", "C"], [10, 20, 30]   |   { A: 10, B: 20, C: 30 }   |
  +--------------------------------------------------------------------+
  |   ["D", "E", "F", "G"], [7, 4, 6, 8] | { D: 7, E: 4, F: 6 , G: 8 } |                   
  +--------------------------------------------------------------------+  
  |       ["Jett", "Ken"], [30, 40]      |    { Jett: 30, Ken, 40 }    |
  +--------------------------------------------------------------------+
  
*/

function createArray(arr1, arr2) {
  let obj = {};
  for (i = 0; i < arr1.length; i++) {
    function arr() {
      return arr1[i];
    }
    let b = arr2[i];
    obj[arr()] = b;
  }
  return obj;
}

const result1 = createArray(["Jett", "Ken"], [30, 40]);
const result2 = createArray(["Math", "Science", "English"], [85, 90, 75]);
const result3 = createArray(["Pizza", "Salad", "Pasta", "Steak"], [3, 4, 2, 1]);

if (
  checkResult(result1, { Jett: 30, Ken: 40 }) &&
  checkResult(result2, { Math: 85, Science: 90, English: 75 }) &&
  checkResult(result3, { Pizza: 3, Salad: 4, Pasta: 2, Steak: 1 })
) {
  alert("🎉");
}

// 결과값 확인을 위한 함수이니 신경쓰지 않으셔도 됩니다.

function checkResult(result, answer) {
  for (const prop in answer) {
    if (result[prop] !== answer[prop]) {
      return false;
    }
  }

  return true;
}
