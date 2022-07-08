var youtubeKey = 'AIzaSyDgeMFI5KgUm3EXNFeCrZouOzDNHuI_DQc';
var youtubeURL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=' + youtubeKey;

fetch(youtubeURL)
  .then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    })
  });