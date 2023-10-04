// Wait for the document to be ready
$(document).ready(function() {
  // Select the "Translate" button by its ID
  $('#btn_translate').click(function() {
    // Get the language code from the input field by its ID
    const languageCode = $('#language_code').val();

    // Define the URL to fetch the translation based on the language code
    const url = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;

    // Make an AJAX GET request to fetch the translation
    $.get(url, function(data) {
      // Select the <div> element with ID "hello" and set its text to the translation
      $('#hello').text(data.hello);
    });
  });
});
