import input from '../input.js';

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

  const isolatedClaim = new Set();

  for (let key in store) {
    const { topLeftCoordinate, boxSize } = store[key];

    let top = topLeftCoordinate[1];
    let right = topLeftCoordinate[0] + boxSize[0];
    let bottom = topLeftCoordinate[1] + boxSize[1];
    let left = topLeftCoordinate[0];
    let overlap = false;

    for (let i = top; i < bottom; i++) {
      for (let j = left; j < right; j++) {
        const overlappingClaims = matrix[i][j];
        if (!overlappingClaims) {
          matrix[i][j] = key;
        } else {
          overlap = true;
          if (isolatedClaim.has(overlappingClaims)) {
            isolatedClaim.delete(overlappingClaims);
          }
        }
      }
    }
    if (!overlap) {
      isolatedClaim.add(key);
    }
  }
  return isolatedClaim;
}

console.log(isolateClaim(input))