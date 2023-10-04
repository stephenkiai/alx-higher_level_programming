// Wait for the document to be ready
$(document).ready(function() {
  // Select the <div> element with id "update_header" & add click event handler
  $('#update_header').click(function() {
    // Select the <header> element and update its text
    $('header').text('New Header!!!');
  });
});
