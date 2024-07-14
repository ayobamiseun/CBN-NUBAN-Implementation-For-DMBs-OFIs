const  getPossibleBanks  = require('../helpers/getPossibleBanks');

/**
 * Controller function to retrieve possible banks based on the provided account number.
 * @param {string} accountNumber - The account number to validate.
 * @returns {Array<{ bankCode: string; bankName: string }>} - An array of objects containing matched bank codes and their corresponding names.
 */
const getPossibleBanksController = (accountNumber) => {
  console.log(accountNumber)
  return getPossibleBanks(accountNumber);
};

module.exports = getPossibleBanksController;
 