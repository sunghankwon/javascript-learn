/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/


function pigIt(str){
    const arr = str.split(" ");
    let rArr = [];
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i][0].charCodeAt() > 64 && arr[i][0].charCodeAt() < 90 || arr[i][0].charCodeAt() > 96 && arr[i][0].charCodeAt() < 123  ) {
      
      let nChar = arr[i][0] + "ay";
      let nStr = arr[i].substring(1) + nChar;
      rArr.push(nStr);
      } else {
        rArr.push(arr[i]);
      }
    }
    
    const result = rArr.join(" ");
    
    
    return result;
  }
  
  