// Global HTML DOM traversal variables
var searchInputEl = document.getElementById('inputField');
var searchBtn = document.getElementById('searchButton');

// Global variable for local storage
var storedSearches = [];

// Display current date and time
$('#currentDate').text(moment().format("dddd, MMMM Do YYYY"));
$('#currentTime').text(moment().format("h:mm A"));

// Get searches from local storage
function getStoredSearches() {

    // Pull search array (parsed) from local storage, store in temporary variable, view in console
    localSearches = JSON.parse(localStorage.getItem('Searches'));
    console.log(localSearches);
    console.log(storedSearches);

    // If there is no local storage (first time use or cleared local storage), the empty program global variable will be used instead of pulling from local storage
    if (localSearches !== null) {
        storedSearches = localSearches;
        console.log(storedSearches);
    }
}

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

// Initialize getStoredSearches function
getStoredSearches();
