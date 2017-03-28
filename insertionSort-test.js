const assert = require('chai').assert;
const insertionSort = require('./insertionSort.js')
const compareNumbers = require('./helper.js')
const randomNumbers = require('./helper.js')

describe('Inserting stuff in other stuff', () => {

  it('this is an array', () => {
    let array = (['d', 'b', 'a', 'c'])

    assert.isArray(array);
  })

  it('the array is unsorted', () => {
    let array = (['d', 'b', 'a', 'c'])

    assert.notDeepEqual(array, [ 'a', 'b', 'c', 'd' ])
  })

  it('sorts the array into a sensible arrangement', () => {
    let array = (['d', 'b', 'a', 'c'])

    assert.deepEqual(insertionSort(array), [ 'a', 'b', 'c', 'd' ])
  })

  it('it sorts arrays of numbers sensible arrangements as well', () => {
    let array = ([7, 5, 6, 2, 4, 1, 8, 3])

    assert.deepEqual(insertionSort(array), [1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('length of the array should be the same before and after sorting', () => {
    let array = ([7, 5, 6, 2, 4, 1, 8, 3])

    assert.equal(array.length, 8);
    assert.equal(insertionSort(array).length, 8)
  })

  it('should sort random arrays', () => {
    let array = [];

    randomNumbers(array);
    assert.deepEqual(insertionSort(array), array.sort(compareNumbers))
  })
})
