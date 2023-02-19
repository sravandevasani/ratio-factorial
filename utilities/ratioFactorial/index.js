let ratioOfTwoNumbers = require("../ratio/index");
let factorialOfNumber = require("../factorial/index");

function RatioAndFacOfNum(num1, num2, num3) {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num3),
  };
}

console.log(RatioAndFacOfNum(2, 4, 5));
