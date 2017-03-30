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
  let merged = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      merged.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }
  while (left.length) {
    merged.push(left.shift())
  }
  while (right.length) {
    merged.push(right.shift())
  }
  return merged;
}

module.exports = mergeSort
