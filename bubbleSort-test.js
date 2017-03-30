const assert = require('chai').assert;
const bubbleSort = require('./bubbleSort.js')
const compareNumbers = require('./helper.js')
const randomNumbers = require('./helper.js')

describe('Here comes the bubble:', () => {

  it('this is an array', () => {
    let array = (['d', 'b', 'a', 'c'])

    assert.isArray(array);
  })

  it('the array is unsorted', () => {
    let array = (['d', 'b', 'a', 'c'])

    assert.notDeepEqual(array, [ 'a', 'b', 'c', 'd' ])
  })

  it('it sorts the array into a sensible arrangement', () => {
    let array = (['d', 'b', 'a', 'c'])

    assert.deepEqual(bubbleSort(array), [ 'a', 'b', 'c', 'd' ])
  })

  it('it sorts arrays of numbers sensible arrangements as well', () => {
    let array = ([7, 5, 6, 2, 4, 1, 8, 3])

    assert.deepEqual(bubbleSort(array), [1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('it sorts in bubble form', () => {
    let array = ([5, 4, 3, 2, 1])

    assert.deepEqual(bubbleSort(array), [1, 2, 3, 4, 5])
  })

  it('length of the array should be the same before and after sorting', () => {
    let array = ([7, 5, 6, 2, 4, 1, 8, 3])

    assert.equal(array.length, 8);
    assert.equal(bubbleSort(array).length, 8)
  })

  it('should sort random arrays', () => {
    let array = [];

    randomNumbers(array);
    assert.deepEqual(bubbleSort(array), array.sort(compareNumbers))
  })

})
