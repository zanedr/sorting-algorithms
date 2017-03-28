const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let holder = array[i]

      array[i] = array[i + 1]
      array[i + 1] = holder
      bubbleSort(array)
    }
  }
  return array
}

module.exports = bubbleSort
