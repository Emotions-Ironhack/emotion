exports.filterSpotify = function (spotifyData) {

  let collection = [];
  console.log('length of spotifyData: ',spotifyData.tracks.length);

  for (let i = 0; i < spotifyData.tracks.length; i++) {
      let dataProcess = {};
      dataProcess.artistName = spotifyData.tracks[i].artists[0].name;
      dataProcess.artistUrlImg = spotifyData.tracks[i].album.images[0].url;
      dataProcess.albumName = spotifyData.tracks[i].name;
      dataProcess.linkUrl = spotifyData.tracks[i].album.external_urls.spotify;
      dataProcess.trackName = spotifyData.tracks[i].album.name;
      dataProcess.previewUrl = spotifyData.tracks[i].preview_url;
      collection.push(dataProcess);
    }

    spotifyData = [];
    return collection;
};
