function analyzeArray(arr) {
  return {
    average: average(arr),
    min: min(...arr),
    max: max(...arr),
    length: arrLength(arr),
  };
}

analyzeArray([4, 2]);

function average(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  let average = sum / arr.length;
  return average;
}

function min(...arr) {
  const min = Math.min(...arr);
  return min;
}

function max(...arr) {
  const max = Math.max(...arr);
  return max;
}

function arrLength(arr) {
  const array = arr.length;
  return array;
}

module.exports = analyzeArray;
