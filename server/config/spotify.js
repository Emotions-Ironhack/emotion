module.exports = function spotify(urlParams) {

var request = require('request');

var headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer BQBLSAv-eupgZ8mcBtxH_Filur0XucoYq1YyT4ORn3A6zDJkKwfiXm4wPFig-Xwiptp3ayFQ4J4HkOJHN3tjXbN4Xp9U-vFgWCvZxFC9zrPDGMeDAHhYY_TrRI5KK2gzyX4UmGgfzBGMPNGIcDx8ZSELFc7MZr9Y-Xn_uBHGM9ZpBf7L4h91Q5kH8P0h6F4f663KWZOJAbpVyj9osK7skI2N5lY'
};

var options = {
  //url: 'https://api.spotify.com/v1/recommendations?min_energy=&market=US&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&min_popularity=50',
  // url: 'https://api.spotify.com/v1/recommendations?min_energy=0.4&market=US&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&min_popularity=50',
  url: "https://api.spotify.com/v1/recommendations?min_energy="+min_energy+"&market=US&min_danceability="+min_danceability+"&seed_genres="+seed_genres+"limit=10&max_energy="+max_energy+"&max_danceability="+max_danceability+"&min_popularity=66&max_speechiness=0.66&min_speechiness=0.33",
  headers: headers
};

let requestRecomm = new Promise((resolve, reject) => {
  request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body);
        resolve(obj);
      }else{
        reject( err => console.log('ERROR reject in request RECOMMENDATION promise: ', err));
        console.log('ERROR: ',error);
      }
    });
});

// It is neccessary RETURN the resolve of the Promise
return requestRecomm.then(obj => {
    return obj;
});


};
