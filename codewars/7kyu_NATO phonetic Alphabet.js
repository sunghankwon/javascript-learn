/*
Complete the function nato that takes a word in parameter and returns a string that spells the word using the NATO phonetic alphabet.

There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

Examples
"hi"      -->  "Hotel India"
"abc"     -->  "Alpha Bravo Charlie"
"babble"  -->  "Bravo Alpha Bravo Bravo Lima Echo"
"Banana"  -->  "Bravo Alpha November Alpha November Alpha"

테스트 통과
제출시 오류 발생
*/

// the object LETTERS is preloaded
// LETTERS['B'] === 'Bravo', etc
function nato(word) {
  var answer = "";
  for (i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "A") {
      answer += "Alpha ";
    } else if (word[i] === "b" || word[i] === "B") {
      answer += "Bravo ";
    } else if (word[i] === "c" || word[i] === "C") {
      answer += "Charlie ";
    } else if (word[i] === "d" || word[i] === "D") {
      answer += "Delta ";
    } else if (word[i] === "e" || word[i] === "E") {
      answer += "Echo ";
    } else if (word[i] === "f" || word[i] === "F") {
      answer += "Foxtrot ";
    } else if (word[i] === "g" || word[i] === "G") {
      answer += "Golf ";
    } else if (word[i] === "h" || word[i] === "H") {
      answer += "Hotel ";
    } else if (word[i] === "i" || word[i] === "I") {
      answer += "India ";
    } else if (word[i] === "j" || word[i] === "J") {
      answer += "Juliett ";
    } else if (word[i] === "k" || word[i] === "K") {
      answer += "Kilo ";
    } else if (word[i] === "l" || word[i] === "L") {
      answer += "Lima ";
    } else if (word[i] === "m" || word[i] === "M") {
      answer += "Mike ";
    } else if (word[i] === "n" || word[i] === "N") {
      answer += "November ";
    } else if (word[i] === "o" || word[i] === "O") {
      answer += "Oscar ";
    } else if (word[i] === "p" || word[i] === "P") {
      answer += "Papa ";
    } else if (word[i] === "q" || word[i] === "Q") {
      answer += "Quebec ";
    } else if (word[i] === "r" || word[i] === "R") {
      answer += "Romeo ";
    } else if (word[i] === "s" || word[i] === "S") {
      answer += "Sierra ";
    } else if (word[i] === "t" || word[i] === "T") {
      answer += "Tango ";
    } else if (word[i] === "u" || word[i] === "U") {
      answer += "Uniform ";
    } else if (word[i] === "v" || word[i] === "V") {
      answer += "Victor ";
    } else if (word[i] === "w" || word[i] === "W") {
      answer += "Whiskey ";
    } else if (word[i] === "x" || word[i] === "X") {
      answer += "X-ray ";
    } else if (word[i] === "y" || word[i] === "Y") {
      answer += "Yankee ";
    } else if (word[i] === "z" || word[i] === "Z") {
      answer += "Zulu ";
    }
    if (i === word.length - 1) {
      answer = answer.substr(0, answer.length - 1);
    }
  }
  return answer;
}
