const ratio1 = require("../ratio/index.js");
const factorial1 = require("../factorial/index.js");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratio1(a, b);
  const factorial = factorial1(c);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
