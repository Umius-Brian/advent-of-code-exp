import input from './input.js';

const overlapClaims = claims => {
  const claimsArray = claims.split('\n');

  const matrix = [...Array(1000)].map(e => Array(1000).fill(''))

  const store = {}

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

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let key in store) {
        if (
          i >= store[key].topLeftCoordinate[1] && 
          i < store[key].boxSize[1] + store[key].topLeftCoordinate[1] &&
          j >= store[key].topLeftCoordinate[0] &&
          j < store[key].boxSize[0] + store[key].topLeftCoordinate[0]
        ) {
          if (matrix[i][j] === '') {
            matrix[i][j] = 1;
          } else {
            matrix[i][j]++;
          }
        }
      }
    }
  }

  const flatArr = matrix.flat();
  let count = 0;

  for (let i = 0; i < flatArr.length; i++) {
    if (flatArr[i] > 1) count++;
  }

  console.log(count)
  return count;
}

overlapClaims(input);

