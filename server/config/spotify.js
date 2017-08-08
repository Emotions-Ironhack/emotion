const {SPOTIFY_CLIENT, SPOTIFY_SECRET} = process.env;
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
      'Authorization': `Bearer ${cachedToken}`
    },
    json:true
  });
}

let cachedToken;
let tokenTimestamp;


function spotify(urlParam) {
  const isTokenValid = checkIsTokenIsValid(cachedToken);
  if (isTokenValid){
    return getSpotifyData(urlParam);
  }

  return getSpotifyToken()
    .then(data => {
      cachedToken = data.body.access_token;
      tokenTimestamp = Date.now();
      return getSpotifyData(urlParam);
    })
    .then(response => response.body);
}

module.exports = spotify;
