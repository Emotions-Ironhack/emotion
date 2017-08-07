const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dictionary = require('./emotionSchema');
// {Object[0]} ==> Music {Object[1]}==> Films
mongoose.connect(`mongodb://localhost/emotions`);

const EmotionDic = [{
    emotion_name: "anger",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.1&market=US&min_danceability=0.1&seed_genres=piano,classical,chill,sleep,study&limit=10&max_energy=0.5&max_danceability=0.5&min_popularity=50",
    movies_genres: [{
      id: 28,
      name: "Action"
    }, {
      id: 12,
      name: "Adventure"
    }, {
      id: 16,
      name: "Animation"
    }]
  },

  {
    emotions: "contempt",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.3&market=US&min_danceability=0.1&seed_genres=dance,club,house,grunge,romance&limit=10&max_energy=0.8&max_danceability=1&min_popularity=50",
    movies_genres: [{
      id: 35,
      name: "Comedy"
    }, {
      id: 80,
      name: "Crime"
    }, {
      id: 99,
      name: "Documentary"
    }]
  },

  {
    emotions: "disgust",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.1&market=US&min_danceability=0.1&seed_genres=piano,trip-hop,jazz,classical,indie&limit=10&max_energy=0.5&max_danceability=1&min_popularity=50",
    movies_genres: [{
        id: 18,
        name: "Drama"
      }, {
        id: 10751,
        name: "Family"
      }, {
        id: 14,
        name: "Fantasy"
      }]
  },

  {
    emotions: "fear",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.1&market=US&min_danceability=0.1&seed_genres=reggae,sleep,soul,disco,pop&limit=10&max_energy=0.5&max_danceability=1&min_popularity=50",
    movies_genres: [{
        id: 36,
        name: "History"
      }, {
        id: 27,
        name: "Horror"
      }, {
        id: 10402,
        name: "Music"
      }]
  },

  {
    emotions: "happiness",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.5&market=US&min_danceability=0.1&seed_genres=pop,rock,dance,indie,reaggeton&limit=10&max_energy=0.9&max_danceability=1&min_popularity=50",
    movies_genresId: [{
        id: 9648,
        name: "Mystery"
      }, {
        id: 10749,
        name: "Romance"
      }, {
        id: 878,
        name: "Science Fiction"
      }]
  },

  {
    emotions: "neutral",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.1&market=US&min_danceability=0.5&seed_genres=rock,dance,hip-hop,disco,pop&limit=10&max_energy=1&max_danceability=1&min_popularity=50",
    movies_genres: [{
        id: 10770,
        name: "TV Movie"
      }, {
        id: 53,
        name: "Thriller"
      }, {
        id: 10752,
        name: "War"
      }, {
        id: 37,
        name: "Western"
      }]
  },

  {
    emotions: "sadness",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.4&market=US&min_danceability=0.3&seed_genres=rock,pop,chill,movies,indie&limit=10&max_energy=1&max_danceability=1&min_popularity=50",
    movies_genres: [{
        id: 53,
        name: "Thriller"
      }, {
        id: 10752,
        name: "War"
      }]
  },

  {
    emotions: "surprise",
    urlParam: "https://api.spotify.com/v1/recommendations?min_energy=0.1&market=US&min_danceability=0.1&seed_genres=dance,party,road-trip,hip-hop,chicago-house&limit=10&max_energy=0.5&max_danceability=1&min_popularity=50",
    movies_genres: [{
        id: 35,
        name: "Comedy"
      }, {
        id: 80,
        name: "Crime"
      }]
  }
];

Dictionary.create(EmotionDic, (err, EmotionDic) => {
  if (err) {
    throw (err);
  }
  console.log("Success", EmotionDic);
  mongoose.connection.close();
});
