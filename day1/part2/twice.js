import input from './input.js'

/**
 * Starting from a frequency of zero and given a series of frequency changes,
 * find the first repeating frequency.
 */

function twice(changes) {
  // convert multi-line string param into an integer-filled array
  const arr = changes.split('\n').map(item => +item);

  // start cache with a 0 value because it always starts with 0
  // update frequency and cache its value
  const cache = {'0': 1};
  let frequency = 0;

  // continue loop through array until cached value has been seen twice
  // repeat loop if value has not been found
  while (cache[frequency] < 2) {
    for (let i = 0; i < arr.length; i++) {
      frequency += arr[i];
      if (!cache[frequency]) {
        cache[frequency] = cache[frequency] + 1 || 1;
      } else {
        return frequency;
      }
    }
  }
  return frequency;
}

twice(input)