// Wait for the document to be ready
$(document).ready(function() {
  // Add item to the list when clicking on DIV#add_item
  $('#add_item').click(function() {
    // Create a new <li> element with the text "Item"
    const newItem = $('<li>Item</li>');
    
    // Append the new <li> element to the UL with class "my_list"
    $('ul.my_list').append(newItem);
  });

  // Remove the last item from the list when clicking on DIV#remove_item
  $('#remove_item').click(function() {
    // Select the last <li> element within the UL with class "my_list"
    const lastItem = $('ul.my_list li:last-child');
    
    // Remove the last <li> element from the list
    lastItem.remove();
  });

  // Clear all items from the list when clicking on DIV#clear_list
  $('#clear_list').click(function() {
    // Select all <li> elements within the UL with class "my_list"
    const allItems = $('ul.my_list li');
    
    // Remove all <li> elements from the list
    allItems.remove();
  });
});
