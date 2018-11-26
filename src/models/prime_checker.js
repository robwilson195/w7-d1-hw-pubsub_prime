const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function () {

};


PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputted_number = event.detail;
    result = this.numberIsPrime(inputted_number);
    PubSub.publish('PrimeNumberChecker:result-calculated', result);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeChecker;
