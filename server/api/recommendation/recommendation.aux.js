exports.getDataSpotify = function (spotifyData) {

  let collection = [];

  for (let i = 0; i < 10; i++) {
      let dataProcess = {};
      dataProcess.artistName = spotifyData.tracks[i].artists[0].name;
      dataProcess.artistUrlImg = spotifyData.tracks[i].album.images[0].url;
      dataProcess.albumName = spotifyData.tracks[i].name;
      dataProcess.linkUrl = spotifyData.tracks[i].album.external_urls.spotify;
      dataProcess.trackName = spotifyData.tracks[i].album.name;
      dataProcess.previewUrl = spotifyData.tracks[i].preview_url;
      collection.push(dataProcess);
    }
    return collection;
};
