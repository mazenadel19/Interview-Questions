// Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

console.log(wordBreak("leetcode", ["leet", "code"])); // true

console.log(wordBreak("catsandog", ["cat", "cats", "and", "sand", "dog"]));
// false
// Although "cat", "cats", "and", and "dog" are in the dictionary, the string does not have a valid segmentation where all parts are in the dictionary.

console.log(wordBreak("aaaaaaaa", ["aa", "aaa"]));
// true
// "aaaaaaaa" can be segmented in multiple ways such as "aa aa aa aa" or "aaa aa aaa" where "aa" and "aaa" are in the dictionary.


function wordBreak(word: string, segments: string[]) {
  for (const segment of segments) {
    const result = word.search(segment);
    if (result === -1) return false;
    word = word.replace(segment, "");
  }
  return true;
}

