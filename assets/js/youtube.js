// Not using built in methods to get a list of document elements, because doing it manually makes it easier to see if the data from Youtube is matching correctly
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

var channelIconList = document.querySelectorAll('.channel-icon');

// Using Youtube API to get the top x trending videos
var numberOfVideos = 6;
var videoWidth = '400px';
var videoHeight = '250px';
var youtubeKey = 'AIzaSyDgeMFI5KgUm3EXNFeCrZouOzDNHuI_DQc';
var youtubeURL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=' + numberOfVideos + '&key=' + youtubeKey;

var baseEmbedURL = 'https://www.youtube.com/embed/'; // Used to embed the video results from fetch to the webpage
var baseLinkURL = 'https://www.youtube.com/watch?v='; // Used to link to the video
var baseChannelURL = 'https://www.youtube.com/channel/'; //Used to link to the channel

// Used to obtain channel icon and subscriber count
var youtubeChannelURL = 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=';
let channelDataURLs = [];

async function youtubeFetch(event) {
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

            // Displaying number of subscribers, channel icon, and channel name by fetching a different part of the API
            channelDataURLs.push(youtubeChannelURL + data.items[i].snippet.channelId + '&key=' + youtubeKey);
        }
        
        fetch(channelDataURLs[0])
        .then(function(response2) {
                if (response2.ok) {
                    response2.json().then(function(data2) {
                        console.log(data2);

                        // Displaying channel name and creating a link to channel when clicked
                        console.log(data2.items[0].snippet.title);
                        channelList[0].innerHTML = data2.items[0].snippet.title;
                        channelList[0].setAttribute('href', baseChannelURL + data2.items[0].id);
                        channelList[0].setAttribute('target', '_blank');

                        // Displaying channel subscribers
                        dataList[0].innerHTML += "<br>Subscribers: " + data2.items[0].statistics.subscriberCount;

                        // Displaying channel icon
                        channelIconList[0].setAttribute('src', data2.items[0].snippet.thumbnails.default);
                        
                        
                    })
                } else {
                    alert('Error: ' + response2.statusText);
                }
            })
            .catch(function(error) {
                alert('Unable to retrieve Youtube channels');
            });

            fetch(channelDataURLs[1])
                .then(function(response2) {
                    if (response2.ok) {
                        response2.json().then(function(data2) {
                            console.log(data2);

                            // Displaying channel name and creating a link to channel when clicked
                            console.log(data2.items[0].snippet.title);
                            channelList[1].innerHTML = data2.items[0].snippet.title;
                            channelList[1].setAttribute('href', baseChannelURL + data2.items[0].id);
                            channelList[1].setAttribute('target', '_blank');

                            // Displaying channel subscribers
                            dataList[1].innerHTML += "<br>Subscribers: " + data2.items[0].statistics.subscriberCount;

                            // Displaying channel icon
                            channelIconList[1].setAttribute('src', data2.items[0].snippet.thumbnails.default);
                            
                            
                        })
                    } else {
                        alert('Error: ' + response2.statusText);
                    }
                })
                .catch(function(error) {
                    alert('Unable to retrieve Youtube channels');
                });

                fetch(channelDataURLs[2])
                .then(function(response2) {
                    if (response2.ok) {
                        response2.json().then(function(data2) {
                            console.log(data2);

                            // Displaying channel name and creating a link to channel when clicked
                            console.log(data2.items[0].snippet.title);
                            channelList[2].innerHTML = data2.items[0].snippet.title;
                            channelList[2].setAttribute('href', baseChannelURL + data2.items[0].id);
                            channelList[2].setAttribute('target', '_blank');

                            // Displaying channel subscribers
                            dataList[2].innerHTML += "<br>Subscribers: " + data2.items[0].statistics.subscriberCount;

                            // Displaying channel icon
                            channelIconList[2].setAttribute('src', data2.items[0].snippet.thumbnails.default);
                            
                            
                        })
                    } else {
                        alert('Error: ' + response2.statusText);
                    }
                })
                .catch(function(error) {
                    alert('Unable to retrieve Youtube channels');
                });

                fetch(channelDataURLs[3])
                .then(function(response2) {
                    if (response2.ok) {
                        response2.json().then(function(data2) {
                            console.log(data2);

                            // Displaying channel name and creating a link to channel when clicked
                            console.log(data2.items[0].snippet.title);
                            channelList[3].innerHTML = data2.items[0].snippet.title;
                            channelList[3].setAttribute('href', baseChannelURL + data2.items[0].id);
                            channelList[3].setAttribute('target', '_blank');

                            // Displaying channel subscribers
                            dataList[3].innerHTML += "<br>Subscribers: " + data2.items[0].statistics.subscriberCount;

                            // Displaying channel icon
                            channelIconList[3].setAttribute('src', data2.items[0].snippet.thumbnails.default);
                            
                            
                        })
                    } else {
                        alert('Error: ' + response2.statusText);
                    }
                })
                .catch(function(error) {
                    alert('Unable to retrieve Youtube channels');
                });

                fetch(channelDataURLs[4])
                .then(function(response2) {
                    if (response2.ok) {
                        response2.json().then(function(data2) {
                            console.log(data2);

                            // Displaying channel name and creating a link to channel when clicked
                            console.log(data2.items[0].snippet.title);
                            channelList[4].innerHTML = data2.items[0].snippet.title;
                            channelList[4].setAttribute('href', baseChannelURL + data2.items[0].id);
                            channelList[4].setAttribute('target', '_blank');

                            // Displaying channel subscribers
                            dataList[4].innerHTML += "<br>Subscribers: " + data2.items[0].statistics.subscriberCount;

                            // Displaying channel icon
                            channelIconList[4].setAttribute('src', data2.items[0].snippet.thumbnails.default);
                            
                            
                        })
                    } else {
                        alert('Error: ' + response2.statusText);
                    }
                })
                .catch(function(error) {
                    alert('Unable to retrieve Youtube channels');
                });

                fetch(channelDataURLs[5])
                .then(function(response2) {
                    if (response2.ok) {
                        response2.json().then(function(data2) {
                            console.log(data2);

                            // Displaying channel name and creating a link to channel when clicked
                            console.log(data2.items[0].snippet.title);
                            channelList[5].innerHTML = data2.items[0].snippet.title;
                            channelList[5].setAttribute('href', baseChannelURL + data2.items[0].id);
                            channelList[5].setAttribute('target', '_blank');

                            // Displaying channel subscribers
                            dataList[5].innerHTML += "<br>Subscribers: " + data2.items[0].statistics.subscriberCount;

                            // Displaying channel icon
                            channelIconList[5].setAttribute('src', data2.items[0].snippet.thumbnails.default);
                            
                            
                        })
                    } else {
                        alert('Error: ' + response2.statusText);
                    }
                })
                .catch(function(error) {
                    alert('Unable to retrieve Youtube channels');
                });
      })
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function(error) {
    alert('Unable to retrieve Youtube videos');
  });
}

function youtubeChannelsFetch(event) {
    

    

    
}

youtubeFetch().then(function(value){
    console.log(value);
    youtubeChannelsFetch;
}, function(error) {
    console.log('oh no');
});