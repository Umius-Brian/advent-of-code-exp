import input from '../input.js';

/**
 * Given a series of claims containing information that detail their 
 * coordinates and sizes, find the area of overlapping claims.
 */

const overlapClaims = claims => {
  const claimsArray = claims.split('\n');

  // create a matrix and fill it with empty values
  const matrix = [...Array(1000)].map(e => Array(1000).fill(''));

  // create a store to contain coordinates and size information about each claim
  const store = {};

  for (let i = 0; i < claimsArray.length; i++) {
    // parse each claim to gather information about its coordinates and size
    const topLeftX = +claimsArray[i].slice(claimsArray[i].indexOf('@ ') + 1, claimsArray[i].indexOf(','));
    const topLeftY = +claimsArray[i].slice(claimsArray[i].indexOf(',') + 1, claimsArray[i].indexOf(':'));
    const boxWidth = +claimsArray[i].slice(claimsArray[i].indexOf(': ') + 1, claimsArray[i].indexOf('x'));
    const boxHeight = +claimsArray[i].slice(claimsArray[i].indexOf('x') + 1);

    const topLeftCoordinate = [topLeftX, topLeftY];
    const boxSize = [boxWidth, boxHeight];

    // store each claim
    if (!store[claimsArray[i]]) {
      store[i] = {topLeftCoordinate, boxSize};
    }
  }

  // must optimize
  // create a matrix that contains the area of a claim
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let key in store) {
        const { topLeftCoordinate, boxSize } = store[key];
        const topY = topLeftCoordinate[1];
        const height = boxSize[1];
        const topX = topLeftCoordinate[0];
        const width = boxSize[0];

        // for each claim, capture matrix value using coordinates and size
        if (
          i >= topY && 
          i < height + topY &&
          j >= topX &&
          j < width + topX
        ) {
          // if unclaimed, fill matrix value with a 1 to indicate it has been claimed
          // otherwise, increment matrix value
          if (matrix[i][j] === '') {
            matrix[i][j] = 1;
          } else {
            matrix[i][j]++;
          }
        }
      }
    }
  }

  let count = 0;
  const flatArr = matrix.flat();
  
  // increment count for every matrix index value that has been overlapped by one or more claim
  for (let i = 0; i < flatArr.length; i++) {
    if (flatArr[i] > 1) count++;
  }
  
  // return count variable holding the area of overlapped claims
  return count;
}

overlapClaims(input);

