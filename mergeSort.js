const mergeSort = (full) => {
  if (full.length < 2) {
    return full;
  }

  let middle = (full.length) / 2;

  let left = full.slice(0, middle);
  let right = full.slice(middle, full.length)

  return merge(mergeSort(left), mergeSort(right))
}
const merge = (left, right) => {
  let final = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      final.push(left.shift())
    } else {
      final.push(right.shift())
    }
  }
  while (left.length) {
    final.push(left.shift())
  }
  while (right.length) {
    final.push(right.shift())
  }
  return final;
}

module.exports = mergeSort
