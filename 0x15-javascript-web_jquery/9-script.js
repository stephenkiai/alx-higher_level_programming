// Define the URL to fetch the translation
const url = "https://fourtonfish.com/hellosalut/?lang=fr";

// Make an AJAX GET request to fetch the translation
$.get(url, function(data) {
  // Select the <div> element with id "hello" and set its text to the translation
  $('#hello').text(data.hello);
});
