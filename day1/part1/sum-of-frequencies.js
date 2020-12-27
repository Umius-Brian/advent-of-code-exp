import input from '../input.js';

/**
 * If given a series of frequency changes, then starting from a 
 * frequency of zero, apply the changes and return the
 * resulting frequency.
 */

const sumOfFrequencies = frequencyChanges => {
  // convert multi-line string param into an integer-filled array
  const arr = frequencyChanges.split('\n').map(item => +item);

  // sum array values to obtain resulting frequency value
  return arr.reduce((acc, cv) => acc + cv);
}

console.log(sumOfFrequencies(input));