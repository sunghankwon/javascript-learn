/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/


function generateHashtag (str) {
    let nStr = "";
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]) {
        nStr += arr[i][0].toUpperCase() + arr[i].substring(1);
      }
    }
      
    if (!nStr.length || nStr.length > 139) {
      return false;
    }
    
    if (nStr[0].charCodeAt() > 64 && nStr[0].charCodeAt() < 91) {
      return "#" + nStr;
    }
    
    
    
    if (nStr[0].charCodeAt() > 96 && nStr[0].charCodeAt() < 123) {
      return "#" + nStr[0].toUpperCase() + nStr.substring(1);
    }
    
    return nStr;
  }