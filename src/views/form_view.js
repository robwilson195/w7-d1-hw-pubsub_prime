const PubSub = require('../helpers/pub_sub.js'); // Require in the publish and subscribe functions.

const FormView = function () {

};

// The bindEvents function, which the app will call once the DOM is loaded.
FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form'); // Grab the form element.
  form.addEventListener('submit', (event) => {  // Tell the form to to listen for the submit event.
    event.preventDefault();                     // Prevent the submit from doing the standard action.
    const numberForCheck = event.target.number.value;   // Save the number which the user has put in the textbox.
    PubSub.publish('FormView:number-submitted', numberForCheck); // Broadcasts on a specific channel, sending the chosen number.
  })


};

module.exports = FormView;
