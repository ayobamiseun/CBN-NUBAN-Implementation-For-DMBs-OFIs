const bankCodeToName = require('./uniqueBankCode');
const getCheckDigit = require('./CBN_CheckDigitAlgorithm')

/**
 * Retrieves possible banks based on the provided account number by validating against known bank codes.
 * @param {string} accountNumber - The account number to validate.
 * @returns {Array<{ bankCode: string; bankName: string }>} - An array of objects containing matched bank codes and their corresponding names.
 */
const getPossibleBanks = (accountNumber ) => {
  let possibleBanks = [];

  // Example logic to match bank codes based on account number
  const numbers = accountNumber.split('');

  for (const bankCode in bankCodeToName) {
    if (bankCodeToName.hasOwnProperty(bankCode)) {
      const isMatch = getCheckDigit([...bankCode], numbers);
      if (isMatch) {
        possibleBanks.push({ bankCode, bankName: bankCodeToName[bankCode] });
      }
    }
  }

  return possibleBanks;
};

module.exports = getPossibleBanks;
