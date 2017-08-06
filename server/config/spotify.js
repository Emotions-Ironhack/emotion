module.exports = function spotify(urlParam) {

var request = require('request');

var headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer BQCqgEkelmUawKd2uBWgdGTu1sTTHZC_URQYrzzxEYzuVIUrzEHsKXGQWpv-0LRMhY26OiNpGCW6eADCqeu26JZKaAtP0PKqVNew49VRGEpc4v-15F72I-QfGxrW4TIJ5x5qqPYVRXsizAFfLc9_83fP0zKC3buiGI_ZwGuLRGvvz3FWfgM3G-ztyipSURQ47oWpZI-KB6fMl1MRLX-mrpEM9iowq0qnNhxNmYPU-YuLRIqprQtkzEboDogt-eBIpvKDwOWE2dZShqXSX51hA4n-A65J9t72GckV4nM7OADzRezbaoAWXUdY7NXyoxzqSQ'
};

var options = {
  // url: 'https://api.spotify.com/v1/recommendations?min_energy=0.4&market=US&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&min_popularity=50',
  // url: "https://api.spotify.com/v1/recommendations?min_energy="+min_energy+"&market=US&min_danceability="+min_danceability+"&seed_genres="+seed_genres+"limit=10&max_energy="+max_energy+"&max_danceability="+max_danceability+"&min_popularity=66&max_speechiness=0.66&min_speechiness=0.33",
  url : urlParam,
  headers: headers
};

let requestRecomm = new Promise((resolve, reject) => {
  request(options, function (error, response, body) {

      console.log('BODYY ',body);

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
