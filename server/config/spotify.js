const got = require('got');
const SpotifyWebApi = require('spotify-web-api-node');

const SPOTIFY_TOKEN_LIFETIME_MS = 1000 * 60 * 10;
const checkIsTokenIsValid = (tokenTimestamp) => Date.now() - tokenTimestamp < SPOTIFY_TOKEN_LIFETIME_MS;


function getSpotifyToken() {
  return new SpotifyWebApi({
      clientId: '6e4f11d0909b4adbaa7563e22e60a67f',
      clientSecret: '3055782225884d6995469b4239c28022',
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
  if (isTokenValid) return getSpotifyData(urlParam, this.token);

  return getSpotifyToken()
    .then(data => {
      this.token = data.body.access_token;
      this.tokenTimestamp = Date.now();
      return getSpotifyData(urlParam);
    })
    .then(response => response.body);
}

module.exports = spotify;
