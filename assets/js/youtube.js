

var youtubeKey = 'AIzaSyDgeMFI5KgUm3EXNFeCrZouOzDNHuI_DQc';
var youtubeURL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=10&key=' + youtubeKey;

function youtubeFetch(event) {
  //event.preventDefault();
  
  fetch(youtubeURL)
  .then(function(response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
      })
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function(error) {
    alert('Unable to retrieve Youtube videos');
  });
}

youtubeFetch();