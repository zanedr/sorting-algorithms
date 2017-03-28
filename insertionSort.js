const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; j >= i; j--) {
      let holder = array[i];

      if (array[j] < array[i]) {
        array[i] = array[j];
        array[j] = holder;
      }
    }
  }
  return array;
}

module.exports = insertionSort
