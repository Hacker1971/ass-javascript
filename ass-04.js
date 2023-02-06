function findingBadData(number) {
  // function to find the number of negative values in an array
    let badDataCount = 0;
    // loop through the input array
    for (let i = 0; i < number.length; i++) {
       // check if the current element is negative
      if (number[i] < 0) {
        badDataCount++;
      }
    }
    // return the count of negative values
    return badDataCount;
  }
console.log(findingBadData([ 2, -5, -7, -13 ]));  