var lengthOfLongestSubstring = function (inputString) {
  let left = 0;
  let right = 0;
  let max = 0;
  let lookupLibrary = {};
  while (right < inputString.length) {
    if (
      lookupLibrary[inputString[right]] >= 0 &&
      left <= lookupLibrary[inputString[right]]
    ) {
      left = lookupLibrary[inputString[right]] + 1;
    } else {
      max = Math.max(max, right - left + 1);
    }
    lookupLibrary[inputString[right]] = right;
    right++;
  }
  return max;
};
