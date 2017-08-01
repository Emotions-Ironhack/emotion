const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmotionDicSchema = new Schema({
  emotions: [{
      anger: [{
          music: []
        },
        {
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
        }
      ]
    },
    {
      contempt: [{
          music: []
        },
        {
          movies_genres: [
            {
                id: 35,
                name: "Comedy"
            },
            {
                id: 80,
                name: "Crime"
            },
            {
                id: 99,
                name: "Documentary"
            }
          ]
        }
      ]
    },
    {
      disgust: [{
          music: []
        },
        {
          movies_genres: [
            {
                id: 18,
                name: "Drama"
            },
            {
                id: 10751,
                name: "Family"
            },
            {
                id: 14,
                name: "Fantasy"
            }
          ]
        }
      ]
    },
    {
      fear: [{
          music: []
        },
        {
          movies_genres: [
            {
                id: 36,
                name: "History"
            },
            {
                id: 27,
                name: "Horror"
            },
            {
                id: 10402,
                name: "Music"
            },
          ]
        }
      ]
    },
    {
      happiness: [{
          music: []
        },
        {
          movies_genresId: [
            {
                id: 9648,
                name: "Mystery"
            },
            {
                id: 10749,
                name: "Romance"
            },
            {
                id: 878,
                name: "Science Fiction"
            }
          ]
        }
      ]
    },
    {
      neutral: [{
          music: []
        },
        {
          movies_genres: [
            {
                id: 10770,
                name: "TV Movie"
            },
            {
                id: 53,
                name: "Thriller"
            },
            {
                id: 10752,
                name: "War"
            },
            {
                id: 37,
                name: "Western"
            }
          ]
        }
      ]
    },
    {
      sadness: [{
          music: []
        },
        {
          movies_genres: [

            {
                id: 53,
                name: "Thriller"
            },
            {
                id: 10752,
                name: "War"
            }

          ]
        }
      ]
    },
    {
      surprise: [{
          music: []
        },
        {
          movies_genres: [
            {
                id: 35,
                name: "Comedy"
            },
            {
                id: 80,
                name: "Crime"
            }
          ]
        }
      ]
    }
  ]
});

/*
{
    "genres": [
        {
            id: 28,
            name: "Action"
        },
        {
            id: 12,
            name: "Adventure"
        },
        {
            id: 16,
            name: "Animation"
        },
        {
            id: 35,
            name: "Comedy"
        },
        {
            id: 80,
            name: "Crime"
        },
        {
            id: 99,
            name: "Documentary"
        },
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 10751,
            name: "Family"
        },
        {
            id: 14,
            name: "Fantasy"
        },
        {
            id: 36,
            name: "History"
        },
        {
            id: 27,
            name: "Horror"
        },
        {
            id: 10402,
            name: "Music"
        },
        {
            id: 9648,
            name: "Mystery"
        },
        {
            id: 10749,
            name: "Romance"
        },
        {
            id: 878,
            name: "Science Fiction"
        },
        {
            id: 10770,
            name: "TV Movie"
        },
        {
            id: 53,
            name: "Thriller"
        },
        {
            id: 10752,
            name: "War"
        },
        {
            id: 37,
            name: "Western"
        }
    ]
}

*/
module.exports = mongoose.model('EmotionDic', EmotionDicSchema);
