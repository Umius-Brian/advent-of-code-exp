import input from '../input.js'

function prototypeFabric(boxes) {
  const boxesArray = boxes.split('\n');

  for (let i = 0; i < boxesArray.length; i++) {
    for (let j = i + 1; j < boxesArray.length; j++) { 
      let differingCount = 0;
      let commonLetters = '';
      for (let k = 0; k < boxesArray[i].length; k++) {
        if (boxesArray[i][k] !== boxesArray[j][k]) {
          differingCount += 1;
          if (differingCount === 2) break;
        } else {
          commonLetters += boxesArray[i][k];
        }
      }
      if (differingCount === 1) {
        return commonLetters;
      }
    }
  }

  return undefined
}

console.log(prototypeFabric(input));