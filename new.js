function mindGame(number) {
    // function to perform a mathematical operation on a given number
    return (number * 3 + 10) / 2 - 5;
  }


  function evenOdd(str) {
    // calculate the number of characters in the string
      let charCount = str.length;
      // return 'Even' if the length is even, 'Odd' otherwise
      return charCount % 2 === 0 ? 'Even' : 'Odd';
    }



    function isLGSeven(num) {
        // This function takes in a number and returns the difference between the input and 7 if the difference is less than 7,
        let diff =(num - 7);
        if (diff < 7) {
          return diff;
        } else {
          return Math.abs (2 * num);
        }
      }

  
    

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

        

        function gemsToDiamond(gems1, gems2, gems3) {
            // calculate the total value of gems
           let total =(gems1 * 21) +(gems2 * 32) +(gems3 * 43);
            // return the difference between the total value and 2000
           return Math.abs(total > 2000 ? 2000 - total : total);
         }  