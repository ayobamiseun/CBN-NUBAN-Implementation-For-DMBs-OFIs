// banks.js

const express = require('express');
const router = express.Router();
const getPossibleBanksController  = require('../controllers/banksController');

router.get('/banks', (req, res) => {
  const { accountNumber } = req.query;
  console.log(accountNumber)

  if (!accountNumber) {
    return res.status(400).json({ error: 'Account number is required.' });
  }

  const possibleBanks = getPossibleBanksController(accountNumber);

  res.json({ possibleBanks });
});

module.exports = router;
