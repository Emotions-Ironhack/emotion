const got = require('got');
const SpotifyWebApi = require('spotify-web-api-node');

const SPOTIFY_TOKEN_LIFETIME_MS = 1000 * 60 * 10;
const checkIsTokenIsValid = (tokenTimestamp) => Date.now() - tokenTimestamp < SPOTIFY_TOKEN_LIFETIME_MS;


function getSpotifyToken() {
  return new SpotifyWebApi({
      clientId: SPOTIFY_CLIENT,
      clientSecret: SPOTIFY_SECRET,
      redirectUri: ''
    })
    .clientCredentialsGrant();
}


function getSpotifyData(urlParam) {
  return got(urlParam, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    json:true
  });
}


function spotify(urlParam) {
  const isTokenValid = checkIsTokenIsValid(this.tokenTimestamp);
  // if (isTokenValid){
  //   console.log('isTokenValid is TRUE');
  //   return getSpotifyData(urlParam);
  // }

  return getSpotifyToken()
    .then(data => {
      console.log('getSpotifyToken----', data.body.access_token);
      this.token = data.body.access_token;
      this.tokenTimestamp = Date.now();
      return getSpotifyData(urlParam);
    })
    .then(response => response.body);
}

module.exports = spotify;
