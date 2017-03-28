const compareNumbers = (a, b) => {
  return a - b;
}

const randomNumbers = (array) => {
  let min = 0;
  let max = 1000;

  for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * (max - min)) + min
  }
  return array;
}

module.exports = compareNumbers, randomNumbers;
