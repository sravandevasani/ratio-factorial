let ratioOfTwoNumbers = require("../ratio/index");
let factorialOfNumber = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num3),
  };
}
module.exports = ratioAndFactorial;
