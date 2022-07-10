// Global HTML DOM traversal variables
var searchInputEl = document.getElementById('inputField');
var searchListEl = document.getElementById('search-list')
var searchBtn = document.getElementById('searchButton');
var nytSwitch = $("#exampleSwitch1");
var redditSwitch = $("#exampleSwitch2");
var youtubeSwitch = $("#exampleSwitch3");
var spotifySwitch = $("#exampleSwitch4");

var timesContent = document.getElementById("times-content");
var redditContent = document.getElementById("reddit-content");
var youtubeContent = document.getElementById("youtube-content");
var spotifyContent = document.getElementById("spotify-content");

// Global variable for local storage
var storedSearches = [];

// Display current date and time
$('#currentDate').text(moment().format("dddd, MMMM Do YYYY"));
$('#currentTime').text(moment().format("h:mm A"));

// Get searches from local storage
function getStoredSearches() {

    // Pull search array (parsed) from local storage, store in temporary variable, view in console
    localSearches = JSON.parse(localStorage.getItem('Searches'));
    //console.log(localSearches);
    //console.log(storedSearches);

    // If there is no local storage (first time use or cleared local storage), the empty program global variable will be used instead of pulling from local storage
    if (localSearches !== null) {
        storedSearches = localSearches;
        //console.log(storedSearches);
    }

    // Initialize addStoredSearches function
    addStoredSearches();
}

// Add stored searches to list under search bar for quick access
function addStoredSearches() {

    // Clear list each time the function is executed so that it is not repeated
    searchListEl.innerHTML = '';

    // Iterate over length of stored searches array
    for (var i = 0; i < storedSearches.length; i++) {

        // Create temporary variable for individual stored search, view in console
        var storedSearch = storedSearches[i];
        //console.log(storedSearch);

        // Create button with search term at index, display on recent search list
        var listRow = document.createElement('a');
        listRow.textContent = storedSearch;
        listRow.setAttribute('class', 'button');
        searchListEl.appendChild(listRow);
    }
}

// Add searches to local storage
searchBtn.addEventListener('click', function(event) {

    // Store search in temporary variable, view in console
    var searchInput = searchInputEl.value.trim();
    console.log(searchInput);

    // Add search to existing search array, view in console
    storedSearches.unshift(searchInput);
    console.log(storedSearches);

    // Add search array (stringified) to local storage
    localStorage.setItem('Searches', JSON.stringify(storedSearches));

    // Clear search input field
    searchInputEl.value = '';
})

//result selector
$(document).ready(function() {
    $(nytSwitch).click(function() {
        $(timesContent).toggle();
    })
});

$(document).ready(function() {
    $(redditSwitch).click(function() {
        $(redditContent).toggle();
    })
});

$(document).ready(function() {
    $(youtubeSwitch).click(function() {
        $(youtubeContent).toggle();
    })
});

$(document).ready(function() {
    $(spotifySwitch).click(function() {
        $(spotifyContent).toggle();
    })
});

//light/darkmode



// Initialize getStoredSearches function
getStoredSearches();
