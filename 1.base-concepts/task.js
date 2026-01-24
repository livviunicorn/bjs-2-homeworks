"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;

  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  } else if (D === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths;

  let monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
  let totalAmount = monthlyPayment * n;
  return parseFloat(totalAmount.toFixed(2));
}