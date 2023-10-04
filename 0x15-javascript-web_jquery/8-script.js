// Wait for the document to be ready
$(document).ready(function() {
  // Define the URL to fetch movie data
  const url = "https://swapi-api.alx-tools.com/api/films/?format=json";

  // Make an AJAX GET request to fetch the movie data
  $.get(url, function(data) {
    // Select the <ul> element with id "list_movies"
    const listMovies = $('#list_movies');

    // Loop through the movie results and add each title to the list
    data.results.forEach(function(movie) {
      // Create a new <li> element with the movie title
      const listItem = $('<li>' + movie.title + '</li>');

      // Append the <li> element to the <ul> element
      listMovies.append(listItem);
    });
  });
});
