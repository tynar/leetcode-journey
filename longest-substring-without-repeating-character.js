var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let max = 1;
  for (let i = 0; i < s.length && s.length - i < max; i++) {
    //optimized a bit, we don't need to go further if our maximum is already more than number of characters left
    for (let j = i + 1; j <= s.length; j++) {
      const curMax = new Set(s.slice(i, j).split(""));
      //if there is any repeating character, we don't need to check other part of the string
      if (curMax.size < j - i) break;
      else if (curMax.size > max) max = curMax.size;
    }
  }
  return max;
};

lengthOfLongestSubstring("aasdasd");
