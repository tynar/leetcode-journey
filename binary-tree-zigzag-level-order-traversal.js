var zigzagLevelOrder = function (root) {
  let result = [];
  if (!root) return result;
  let queue = [];
  queue.push(root);
  result.push([root.val]);
  let level = 1;
  while (queue.length) {
    let queueLength = queue.length;
    let currentArray = [];
    for (let i = 0; i < queueLength; i++) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
        currentArray.push(current.left.val);
      }
      if (current.right) {
        queue.push(current.right);
        currentArray.push(current.right.val);
      }
    }
    if (currentArray.length) {
      if (level % 2 === 0) {
        result.push(currentArray);
      } else {
        result.push(currentArray.reverse());
      }
    }
    level++;
  }
  return result;
};
