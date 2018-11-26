const FormView = require('views/form_view.js')



document.addEventListener('DOMContentLoaded', () => { // Waits for the DOM to be loaded.
  console.log('JavaScript Loaded');

  // Once the DOM is loaded, the app should instruct the rest of the model to start listening for relevant prompts.

  // Probably shouldn't start with the form view, since it is broadcasting, but here it is:
  const formView = new FormView();
  formView.bindEvents();    // Calls the bind events function, telling it to start listening for the submit.
});
