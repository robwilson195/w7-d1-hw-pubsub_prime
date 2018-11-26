const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumberChecker:result-calculated', (event) => {
    const result = event.detail;
    this.displayResult(result);
  });
};

ResultView.prototype.displayResult = function (result) {
  const outputDisplay = document.querySelector('#result');
  if (result) {
    outputDisplay.textContent = "Yes, it's a prime number!"
  } else {
    outputDisplay.textContent = "Nope, that's not a prime number!"
  }
};

module.exports = ResultView;
