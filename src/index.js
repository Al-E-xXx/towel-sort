
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (!matrix) {
    return result;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      result.push.apply(result, matrix[i].reverse());
    } else {
      result.push.apply(result, matrix[i]);
    }
  }
  
  return result;
}
