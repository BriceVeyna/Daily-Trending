var artistSearch = 'justin';

var client_id = '17efc8febf1143c5be0fa975fa0836c8';
var client_secret = '978a363fdfc643da8565312058af76b0';

var token = '';

fetch('https://accounts.spotify.com/api/token', {
    method: "POST",
    headers: {
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret, 'base64'),
    },
    body: {
        grant_type: 'client_credentials',
    }
})
    .then(function(response, body) {
        if (response.ok) {
            token = body.access_token;
        } else {
            alert('bruh');
        }
    })
    .catch(function(erorr) {
        alert('bruh2');
    });

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     token = body.access_token;
//   }
// });

//var spotifyKey = '17efc8febf1143c5be0fa975fa0836c8:978a363fdfc643da8565312058af76b0';
var baseSpotifyURL = 'https://api.spotify.com';

function spotifyFetch(event) {
  //event.preventDefault();
  
  var URL = baseSpotifyURL + '/v1/search?type=artist&limit=5&market=US&q=' + artistSearch;
  fetch(URL, {
    headers: {
        "Authorization": "Bearer " + token
    }
  })
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

spotifyFetch();