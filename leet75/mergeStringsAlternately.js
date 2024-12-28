// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function (word1, word2) {
  let str = "";
  for (let i = 0; i < word1.length || i < word2.length; i++) {
    word1[i] && (str += word1[i]);
    word2[i] && (str += word2[i]);
  }
  return str;
};
