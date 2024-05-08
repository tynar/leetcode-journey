var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let obj = {};
  while (right < s.length) {
    if (obj[s[right]] >= 0 && left <= obj[s[right]]) {
      left = obj[s[right]] + 1;
    } else {
      max = Math.max(max, right - left + 1);
    }
    obj[s[right]] = right;
    right++;
  }
  return max;
};
