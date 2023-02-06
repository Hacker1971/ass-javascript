function gemsToDiamond(gems1, gems2, gems3) {
     // calculate the total value of gems
    let total =(gems1 * 21) +(gems2 * 32) +(gems3 * 43);
     // return the difference between the total value and 2000
    return Math.abs(total > 2000 ? 2000 - total : total);
  }
  
  
  console.log(gemsToDiamond(1,1,1));
  console.log(gemsToDiamond(20,200,50));
  console.log(gemsToDiamond(100,5,1));
