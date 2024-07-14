const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const middlewares = require('./middlewares');
const banksRouter = require('./api/banks'); // Adjust the path based on your actual file structure

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', banksRouter); // Mount the banksRouter under /api/v1

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
