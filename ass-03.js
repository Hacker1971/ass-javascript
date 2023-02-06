function isLGSeven(num) {
  // This function takes in a number and returns the difference between the input and 7 if the difference is less than 7,
  let diff =(num - 7);
  if (diff < 7) {
    return diff;
  } else {
    return Math.abs (2 * num);
  }
}
  let input = 6;
  console.log(isLGSeven(input)); // Output: -1
  
  input = -15;
  console.log(isLGSeven(input)); // Output: 44
  
  input = 15;
  console.log(isLGSeven(input)); // Output: 6