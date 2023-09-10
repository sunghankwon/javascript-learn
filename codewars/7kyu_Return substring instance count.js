/*
Complete the solution so that it returns the number of times the search_text is found within the full_text. 
Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1
*/

function solution(fullText, searchText) {
  let count = 0;
  let text = "";
  if (searchText.length === 1) {
    for (i = 0; i < fullText.length; i++) {
      if (searchText === fullText[i]) {
        count++;
      }
    }
  } else {
    let num = searchText.length;
    for (i = 0; i < fullText.length; i++) {
      for (j = 0; j < num; j++) {
        text += fullText[i + j];
      }
      if (text === searchText) {
        count++;
        i = i + num - 1;
      }
      text = "";
    }
  }
  return count;
}
