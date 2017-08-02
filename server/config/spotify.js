module.exports = function spotify() {

var request = require('request');

var headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer BQBLSAv-eupgZ8mcBtxH_Filur0XucoYq1YyT4ORn3A6zDJkKwfiXm4wPFig-Xwiptp3ayFQ4J4HkOJHN3tjXbN4Xp9U-vFgWCvZxFC9zrPDGMeDAHhYY_TrRI5KK2gzyX4UmGgfzBGMPNGIcDx8ZSELFc7MZr9Y-Xn_uBHGM9ZpBf7L4h91Q5kH8P0h6F4f663KWZOJAbpVyj9osK7skI2N5lY'
};

var options = {
  url: 'https://api.spotify.com/v1/recommendations?min_energy=0.4&market=US&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&min_popularity=50',
  headers: headers
};

function callback(error, response, body) {
  console.log(response);
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);

};
