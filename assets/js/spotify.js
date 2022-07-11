var songEmbedList = document.querySelectorAll('.song-embed');
var songNameList = document.querySelectorAll('.song-name');
var albumNameList = document.querySelectorAll('.album-name');
var artistNameList = document.querySelectorAll('.artist-name');

var client_id = '17efc8febf1143c5be0fa975fa0836c8';
var client_secret = '978a363fdfc643da8565312058af76b0';

// Access to Spotify's API requires fetching an access token using a base 64 encoded client id and client secret from an app created in Spotify Developers 
async function authorize() {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", 'Basic ' + btoa(client_id + ':' + client_secret)); // Must be base 64 encoded 
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    // The requirements to acquire the access token as specified in Spotify API
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    // Fetching the access token
    let res = await fetch("https://accounts.spotify.com/api/token", requestOptions);
    res = await res.json();
    return res.access_token; 
}

// Searching the API for the Top 50 Global playlist
async function search() {
    // Calling authorize() to get the access token
    const access_token = await this.authorize();
    console.log(access_token);

    // Fetching the data from Spotify's daily updating Top 50 Global playlist 
    playlist_id = '37i9dQZEVXbMDoHDwVN2tF';
    const BASE_URL = 'https://api.spotify.com';
    let FETCH_URL = BASE_URL + '/v1/playlists/' + playlist_id;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", 'Bearer ' + access_token);
    
    // Using the access token to fetch the data
    const requestOptions = {
        method: 'GET',
        headers: myHeaders
    }

    // Fetching the playlist data
    let res = await fetch(FETCH_URL, requestOptions);
    res = await res.json();
    embed(res);
}

function embed(data) {
    console.log(data);

    const BASE_ARTIST_URL = 'https://open.spotify.com/artist/';
    const BASE_EMBED_URL = 'https://open.spotify.com/embed/track/';
    const END_EMBED_URL = '?utm_source=generator';

    for (var i = 0; i < songEmbedList.length; i++) {
        // Embedding the song to the page
        songEmbedList[i].setAttribute('src', BASE_EMBED_URL + data.tracks.items[i].track.id + END_EMBED_URL);
        songEmbedList[i].setAttribute('width', '100%');
        
        // Displaying track name
        songNameList[i].innerHTML = data.tracks.items[i].track.name;
        songNameList[i].setAttribute('href', data.tracks.items[i].track.external_urls.spotify);
        songNameList[i].setAttribute('target', '_blank');

        // Displaying album name and release date
        albumNameList[i].innerHTML = data.tracks.items[i].track.album.name + "<br>" + data.tracks.items[i].track.album.release_date;
        albumNameList[i].setAttribute('href', data.tracks.items[i].track.album.external_urls.spotify);
        albumNameList[i].setAttribute('target', '_blank');

        // Displaying artist(s)
        for (var j = 0; j < data.tracks.items[i].track.artists.length; j++) {
            if (j == 1) {
                artistNameList[i].innerHTML += ", ";
            }
            artistNameList[i].innerHTML += data.tracks.items[i].track.artists[j].name;
            artistNameList[i].setAttribute('href', data.tracks.items[i].track.artists[j].external_urls.spotify);
            artistNameList[i].setAttribute('target', '_blank');
        }
    }

}

search();