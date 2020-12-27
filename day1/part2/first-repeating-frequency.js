import input from '../input.js';

/**
 * Starting from a frequency of zero and given a series of frequency changes,
 * find the first repeating frequency.
 */

const firstRepeatingFrequency = frequencyChanges => {
  // convert multi-line string param into an integer-filled array
  const arr = frequencyChanges.split('\n').map(item => +item);

  // start cache with a 0 value because it always starts with 0
  // update frequency and cache its value
  const cache = { '0': true };
  let frequency = 0;

  // continue loop through array until cached value has been repeated
  // repeat loop if value has not been found
  while (cache[frequency] < 2) {
    for (let i = 0; i < arr.length; i++) {
      frequency += arr[i];
      if (!cache[frequency]) {
        cache[frequency] = true;
      } else {
        return frequency;
      }
    }
  }
  return frequency;
}

console.log(firstRepeatingFrequency(input));