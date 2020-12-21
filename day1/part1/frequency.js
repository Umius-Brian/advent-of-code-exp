import input from './input.js'

/**
 * If given a series of frequency changes, then starting from a 
 * frequency of zero, apply the changes and return the
 * resulting frequency.
 */

function frequencyDevice(changes) {
  // convert multi-line string param into an integer-filled array
  const arr = changes.split('\n').map(item => +item);

  // sum array values to obtain resulting frequency value
  return arr.reduce((acc, cv) => acc + cv);
}

frequencyDevice(input)