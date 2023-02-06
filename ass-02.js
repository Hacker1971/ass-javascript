function evenOdd(str) {
  // calculate the number of characters in the string
    let charCount = str.length;
    // return 'Even' if the length is even, 'Odd' otherwise
    return charCount % 2 === 0 ? 'Even' : 'Odd';
  }
  let inputStr = 'Phero';
  let result = evenOdd(inputStr);
  console.log(result); // Output: Odd
  
  inputStr = 'Batch7';
  result = evenOdd(inputStr);
  console.log(result); // Output: Even
  
  inputStr = 'chatgpt';
  result = evenOdd(inputStr);
  console.log(result); // Output: Odd