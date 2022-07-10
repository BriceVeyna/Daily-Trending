// Global HTML DOM traversal variables
var searchInputEl = document.getElementById('inputField');
var searchBtn = document.getElementById('searchButton');

// Global variable for local storage
var storedSearches = [];

// Add searches to local storage
searchBtn.addEventListener('click', function(event) {

    // Store search in temporary variable, view in console
    var searchInput = searchInputEl.value.trim();
    console.log(searchInput);

    // Add search to existing search array, view in console
    storedSearches.push(searchInput);
    console.log(storedSearches);

    // Add search array (stringified) to local storage
    localStorage.setItem('Searches', JSON.stringify(storedSearches));

    // Clear search input field
    searchInputEl.value = '';
})

