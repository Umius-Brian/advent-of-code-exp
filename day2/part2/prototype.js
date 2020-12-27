import input from '../input.js'

/**
 * Given a series of box IDs, find the common characters of two box IDs that
 * differ by a single character.
 */

function prototypeFabric(boxes) {
  const boxesArray = boxes.split('\n');

  // need to optimize
  // compare every box ID with each other
  // if more than one index differ, move on
  for (let i = 0; i < boxesArray.length; i++) {
    for (let j = i + 1; j < boxesArray.length; j++) { 
      let differingCount = 0;
      let commonLetters = '';
      for (let k = 0; k < boxesArray[i].length; k++) {

        // increment count if characters at a particular index differ
        // move on if there occurs more than one differing index value
        if (boxesArray[i][k] !== boxesArray[j][k]) {
          differingCount += 1;
          if (differingCount === 2) break;
        } else {
          commonLetters += boxesArray[i][k];
        }
      }

      // return common characters of two box IDs if they differ by one character
      if (differingCount === 1) {
        return commonLetters;
      }
    }
  }
  return undefined;
}

prototypeFabric(input);