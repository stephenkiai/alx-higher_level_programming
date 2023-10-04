// Wait for the document to be ready
$(document).ready(function() {
  // Select the <div> element with id "add_item" and add a click event handler
  $('#add_item').click(function() {
    // Create a new <li> element with the text "Item"
    const newItem = $('<li>Item</li>');
    
    // Append the new <li> element to the UL with class "my_list"
    $('ul.my_list').append(newItem);
  });
});
