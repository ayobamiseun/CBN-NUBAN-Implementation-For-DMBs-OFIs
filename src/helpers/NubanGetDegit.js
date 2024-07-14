const getDigit = (total) => {
    const modulo = total % 10;
  
    let checkDigit;
  
    if (modulo === 0) {
      checkDigit = 0;
    } else {
      checkDigit = 10 - modulo;
    }
  
    return checkDigit;
  };
  module.exports = 
    getDigit
