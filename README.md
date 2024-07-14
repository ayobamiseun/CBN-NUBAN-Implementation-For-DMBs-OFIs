# NIGERIA UNIFORM BANK ACCOUNT NUMBER 


### File Descriptions

- **helpers/bankCodes.js**: Contains the mapping of bank codes to bank names.
- **helpers/getCheckDigit.js**: Contains the logic to calculate and verify the NUBAN check digit.
- **uniqueBankCode.js**: Contains the mapping of bank codes to bank names using CommonJS module system.
- **CBN_CheckDigitAlgorithm.js**: Contains the logic to calculate and verify the NUBAN check digit using CommonJS module system.
- **NubanGetDigit.js**: Contains the logic to calculate the NUBAN check digit based on a given total.
- **getPossibleBanks.js**: Contains the main logic to retrieve possible banks based on a provided account number.
- **README.md**: This file.

  
How to use this template:

Clone the repository:

```bash
git clone https://github.com/ayobamiseun/CBN-NUBAN-Implementation-For-DMBs-OFIs
cd CBN-NUBAN-Implementation-For-DMBs-OFIs

npm install

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [jest](https://www.npmjs.com/package/jest)
  * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Development

```
npm run dev
```
