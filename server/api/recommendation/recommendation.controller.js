mongoose = require('mongoose');
const Recommendation = require("./Recommendation");
const Emotion = require("../emotion/Emotion");
const EmotionDic = require("../emotion-dic/emotionSchema");
const spotifyService = require('../../config/spotify');


// RECOMMENDATIONS FOR A EMOTION ID. User can generate some recommendations for a the same Emotion ID
exports.listRecommendations = function(req, res) {

  // List recommendations by Emotion
  let emotionRef = req.params.id;
  Recommendation.find({ emotionRef: emotionRef })
    .then(list => { res.json(list);})
    .catch(err => { res.status(500).json(err); });
};


// RECOMMMENTAIL DETAIL
exports.getRecommendation = (req, res, next) => {

  // Req.params.emotionId
  Recommendation.findById(req.params.id).populate('emontionRef').exec()
    .then((recommendation, err) => {
      if (err) return res.status(500).json(err);
      if (!recommendation) return res.status(404).json(new Error("404"));
      return res.json(recommendation);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};


/* POST CREATE AND SAVE Recommendation*/
exports.createRecommendation = function(req, res) {

  // 1 getEmotionRef  IS THE SAME FUNCTION IN Emotion.controller REFACTOR
  let emotionRefPromise = Emotion.findById(req.params.id).populate('userRef').exec();

  emotionRefPromise.then((emotion, err) => {

    if (err) return res.status(500).json(err);
    if (!emotion) return res.status(404).json(new Error("404"));

    // NO BORRAR 2 Get Dictionary params PROMISE
    // emotion.maxEmotion = 'happiness';
    // let emotionParams = EmotionDic.find({ emotion: emotion.maxEmotion }).exex();

  });


  // 3 Call to spotify service with params
  let spotifyPromise = new Promise((resolve, reject) => {

    // 3.1 When emotionParams is resolved call to spotify API
    // NO BORRRAR emotionParams.then(emotParams => {
      // TODO must return full URL
      let urlParm = 'https://api.spotify.com/v1/recommendations?min_energy=0.4&limit=5&market=US&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&min_popularity=50';

      // 3.2 Call to spotify SERVICE when emotionRed
      let objPlayList = spotifyService(urlParm);
      resolve(objPlayList);
    });

  // });


  // 4 THEN spotifyPromise -> we can create new Recommendation and Save it
  spotifyPromise.then( objPlayList => {
    // res.json(objPlayList);
    console.log('objPlayList ',objPlayList);

    const newRecommendation = new Recommendation({
      emotionRef: '5985a89f17dde40b9d9048bf' || req.params.emotionId,
      recommendations: objPlayList

    });

    console.log('newRecommendation ',newRecommendation);

    newRecommendation.save()
      .then( recommendation => {
        console.log(`New Recommendation User created! ID:${recommendation._id}`);
        res.status(200).json({
          message: 'New Recommendation has been created!',
          id: recommendation._id
        });
      })
      .catch(e => res.status(500).json(e));

  });

};
