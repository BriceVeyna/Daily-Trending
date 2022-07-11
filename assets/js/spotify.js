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
    console.log(res);
}

search();