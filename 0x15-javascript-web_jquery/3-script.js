// Wait for the document to be ready
$(document).ready(function() {
  // Select the <div> element with id "red_header" and add a click event handler
  $('#red_header').click(function() {
    // Select the <header> element and add the "red" class
    $('header').addClass('red');
  });
});
