var groupAnagrams = function (strs) {
  const map = {};
  for (const s of strs) {
    let arr = [];
    for (i = 0; i < s.length; i++) {
      const charPositionInArr = s.charCodeAt(i) - 97;
      if (arr[charPositionInArr]) arr[charPositionInArr]++;
      else arr[charPositionInArr] = 1;
    }
    let mapKey = "";
    for (j = 0; j < arr.length; j++) {
      if (arr[j]) mapKey = mapKey + String.fromCharCode(j + 97) + arr[j];
    }
    if (map[mapKey]) map[mapKey].push(s);
    else map[mapKey] = [s];
  }
  return [...Object.values(map)];
};
