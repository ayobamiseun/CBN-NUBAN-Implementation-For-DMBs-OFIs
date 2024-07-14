const getDigit = require('./NubanGetDegit')
/**
 * Calculates and verifies the NUBAN check digit for a given bank code and account number.
 * @param {string} bankCode - The 6-digit bank code as a string.
 * @param {string} accountNumber - The 10-digit account number as a string.
 * @returns {boolean} - True if the computed check digit matches the provided account number's check digit, false otherwise.
 */
const getCheckDigit = (bankCode, accountNumber) => {
  const bankCodeNumbers = bankCode.map(num => Number(num));

  const accountNumbers = accountNumber.map(num => Number(num));

  const [first, second, third, fourth, fifth, sixth] = bankCodeNumbers;

  // Calculate total for bank code
  const totalForBankCode = first * 3 + second * 7 + third * 3 + fourth * 3 + fifth * 7 + sixth * 3;

  console.log(accountNumbers)

  // Multipliers for account number
  const multipliers = [3, 7, 3, 3, 7, 3, 3, 7, 3];

  // Calculate total for account numbers
  let totalForAccountNumbers = 0; 
  for (let i = 0; i < 9; i++) {
    totalForAccountNumbers += accountNumbers[i] * multipliers[i];
  }

  // Calculate check digit
  const checkDigit = getDigit(totalForAccountNumbers + totalForBankCode);
  console.log(checkDigit, ">>check cksnf")

  // Verify check digit
  return checkDigit === accountNumbers[9];
};

/**
 * Calculates the NUBAN check digit based on a given total.
 * @param {number} total - The total sum of weighted digits for bank code and account number.
 * @returns {number} - The computed check digit.
 */

module.exports =  getCheckDigit
