// Frequency 

function frequencyDevice(changes) {
  // starting frequency begins at 0
  let frequency = 0

  // loop through array of changes and add the changes to variable frequency
  for (let i = 0; i < changes.length; i++) {
    frequency += changes[i]
  }

  return frequency
}

const changes = [1, -2, 3, 1]
// const changes = [1, 1, -2]
// const changes = [-1, -2, -3]
console.log(frequencyDevice(changes))

