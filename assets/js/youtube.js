var embed1 = document.querySelector('#embed-1');
var embed2 = document.querySelector('#embed-2');
var embed3 = document.querySelector('#embed-3');
var embed4 = document.querySelector('#embed-4');
var embed5 = document.querySelector('#embed-5');
var embed6 = document.querySelector('#embed-6');
var embedList = [embed1, embed2, embed3, embed4, embed5, embed6];

var title1 = document.querySelector('#video-title-1');
var title2 = document.querySelector('#video-title-2');
var title3 = document.querySelector('#video-title-3');
var title4 = document.querySelector('#video-title-4');
var title5 = document.querySelector('#video-title-5');
var title6 = document.querySelector('#video-title-6');
var titleList = [title1, title2, title3, title4, title5, title6];

var data1 = document.querySelector('#video-data-1');
var data2 = document.querySelector('#video-data-2');
var data3 = document.querySelector('#video-data-3');
var data4 = document.querySelector('#video-data-4');
var data5 = document.querySelector('#video-data-5');
var data6 = document.querySelector('#video-data-6');
var dataList = [data1, data2, data3, data4, data5, data6];

var videoChannel1 = document.querySelector('#video-channel-1');
var videoChannel2 = document.querySelector('#video-channel-2');
var videoChannel3 = document.querySelector('#video-channel-3');
var videoChannel4 = document.querySelector('#video-channel-4');
var videoChannel5 = document.querySelector('#video-channel-5');
var videoChannel6 = document.querySelector('#video-channel-6');
var channelList = [videoChannel1, videoChannel2, videoChannel3, videoChannel4, videoChannel5, videoChannel6];

// Using Youtube API to get the top x trending videos
var numberOfVideos = 6;
var videoWidth = '400px';
var videoHeight = '250px';
var youtubeKey = 'AIzaSyDgeMFI5KgUm3EXNFeCrZouOzDNHuI_DQc';
var youtubeURL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=' + numberOfVideos + '&key=' + youtubeKey;

var baseEmbedURL = 'https://www.youtube.com/embed/'; // Used to embed the video results from fetch to the webpage
var baseLinkURL = 'https://www.youtube.com/watch?v=';

// Used to obtain channel icon and subscriber count
var youtubeChannelURL = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=';

function youtubeFetch(event) {
  //event.preventDefault();
  
  fetch(youtubeURL)
  .then(function(response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
        for (var i = 0; i < numberOfVideos; i++) {
            // Embedding the video
            embedList[i].setAttribute('src', baseEmbedURL + data.items[i].id);
            embedList[i].setAttribute('width', videoWidth);
            embedList[i].setAttribute('height', videoHeight);

            // Displaying the title and creating a link to the video when you click on the title
            titleList[i].textContent = data.items[i].snippet.title;
            titleList[i].setAttribute('href', baseLinkURL + data.items[i].id);
            titleList[i].setAttribute('target', '_blank');

            // Displaying number of views and likes
            dataList[i].innerHTML = "Views: " + data.items[i].statistics.viewCount + "<br>Likes: " + data.items[i].statistics.likeCount;

            // Displaying number of subscribers, channel icon, and channel name
            var channelDataURL = youtubeChannelURL + data.items[i].snippet.channelId + '&key=' + youtubeKey;
            fetch(channelDataURL)
                .then(function(response) {
                    if (response.ok) {
                        response.json().then(function(data) {
                            console.log(data);
                            
                        })
                    }
                })
        }
        
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