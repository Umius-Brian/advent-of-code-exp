import input from '../input.js';

/**
 * Given a series of strings, for each string check the number of times
 * a letter is repeated twice or thrice. Multiply these occurrences and return
 * the result. If the number of occurrences a letter is repeated twice or thrice
 * is more than one in a given string, only count it once.
 */

const checkSum = boxes => {
  const boxesArray = boxes.split('\n');

  // map variable to hold the number of times a char repeats in each boxId
  // counter variables to hold count of repeating chars
  let doubleChar = 0;
  let tripleChar = 0;

  // loop through each boxId and reset count after each loop
  for (let boxId of boxesArray) {
    repeatLetters(boxId);
  }

  function repeatLetters(boxId) {
    // increment for every char in each boxId
    const countMap = {}
    for (let char of boxId) {
      countMap[char] = countMap[char] + 1 || 1;
    }

    // increment counter variables for first occurrence of any char that repeats once or twice
    for (let char in countMap) {
      if (countMap[char] === 2) {
        doubleChar += 1;
        break;
      }
    }

    for (let char in countMap) {
      if (countMap[char] === 3) {
        tripleChar += 1;
        break;
      }
    }
  }

  // multiply sums of chars that have repeated at least once or twice
  return doubleChar * tripleChar;
}

checkSum(input);
