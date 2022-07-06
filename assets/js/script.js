var url = 'https://newsapi.org/v2/everything?q=Netflix&from=2022-07-06&sortBy=popularity&apiKey=ab0a238633474ee5a2b7e9212d7045b1';

var req = new Request(url);

fetch(req).then(function(response) {
   return response.json();
 }).then(function(responseJson) {
   console.log(responseJson);
 }).catch(function(error) {
   console.log(error);
 });