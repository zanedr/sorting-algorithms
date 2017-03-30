const bubbleSort = (array) => {
  let counter = 0;

  for (let i = 1; i <= array.length; i++) {
    if (array[i - 1] > array[i]) {
      let holder = array[i - 1]

      array[i - 1] = array[i]
      array[i] = holder
      counter++
      console.log(array)
    }
  }
  if (counter !== 0) {
    bubbleSort(array)
  }
  return array
}

module.exports = bubbleSort
