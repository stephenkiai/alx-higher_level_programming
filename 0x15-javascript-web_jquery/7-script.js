// Wait for the document to be ready
$(document).ready(function() {
  // Define the URL to fetch character data
  const url = "https://swapi-api.alx-tools.com/api/people/5/?format=json";

  // Make an AJAX GET request to fetch the character data
  $.get(url, function(data) {
    // Extract the character name from the fetched data
    const characterName = data.name;

    // Select <div> element with id "character" & set text to character name
    $('#character').text(characterName);
  });
});
