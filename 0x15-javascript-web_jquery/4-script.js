// Wait for the document to be ready
$(document).ready(function() {
  // Select the <div> element with id "toggle_header" and add a click event handler
  $('#toggle_header').click(function() {
    // Select the <header> element
    const headerElement = $('header');

    // Toggle the class between "red" and "green"
    if (headerElement.hasClass('red')) {
      headerElement.removeClass('red').addClass('green');
    } else if (headerElement.hasClass('green')) {
      headerElement.removeClass('green').addClass('red');
    }
  });
});
