import input from '../input.js';

/**
 * Given a series of claims, there exists one that does not overlap with
 * the others. Return its claim ID.
 */

const isolateClaim = claims => {
  const claimsArray = claims.split('\n');

  const matrix = [...Array(1000)].map(e => Array(1000).fill(''));
  const store = {};

  for (let i = 0; i < claimsArray.length; i++) {
    let topLeftX = +claimsArray[i].slice(claimsArray[i].indexOf('@ ') + 1, claimsArray[i].indexOf(','));
    let topLeftY = +claimsArray[i].slice(claimsArray[i].indexOf(',') + 1, claimsArray[i].indexOf(':'));
    let boxWidth = +claimsArray[i].slice(claimsArray[i].indexOf(': ') + 1, claimsArray[i].indexOf('x'));
    let boxHeight = +claimsArray[i].slice(claimsArray[i].indexOf('x') + 1)

    let topLeftCoordinate = [topLeftX, topLeftY];
    let boxSize = [boxWidth, boxHeight];

    if (!store[claimsArray[i]]) {
      store[i] = {topLeftCoordinate, boxSize};
    }
  }

  // Create a set to hold any claims
  const isolatedClaim = new Set();

  // optimize
  // fill claims in matrix with its ID and check to see if it overlaps with other claims
  for (let key in store) {
    const { topLeftCoordinate, boxSize } = store[key];

    const top = topLeftCoordinate[1];
    const right = topLeftCoordinate[0] + boxSize[0];
    const bottom = topLeftCoordinate[1] + boxSize[1];
    const left = topLeftCoordinate[0];
    let overlap = false;

    for (let i = top; i < bottom; i++) {
      for (let j = left; j < right; j++) {

        // keep track of overlapped claim ID
        const overlappedClaims = matrix[i][j];

        // if matrix index has not been claimed, claim it with respective ID
        if (!overlappedClaims) {
          matrix[i][j] = key;
        } else {

          // otherwise, indicate that an overlap has occurred and add it to set
          // remove any previously isolated claims if it has been subsequently overlapped
          overlap = true;
          if (isolatedClaim.has(overlappedClaims)) {
            isolatedClaim.delete(overlappedClaims);
          }
        }
      }
    }
    // if there hasn't been an overlap, add it to set
    if (!overlap) {
      isolatedClaim.add(key);
    }
  }
  
  return isolatedClaim;
}

console.log(isolateClaim(input))