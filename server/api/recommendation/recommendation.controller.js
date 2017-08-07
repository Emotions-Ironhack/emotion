mongoose = require('mongoose');
const Recommendation = require("./Recommendation");
const Emotion = require("../emotion/Emotion");
const EmotionDic = require("../emotion-dic/emotionSchema");
const spotifyService = require('../../config/spotify');
const recommendationAux = require('./recommendation.aux');


// RECOMMENDATIONS FOR A EMOTION ID.
exports.listRecommendations = (req, res) => {
  let emotionRef = req.params.id;
  Recommendation.find({ emotionRef: req.params.id })
    .then(list => { res.json(list); })
    .catch(err => { res.status(500).json(err); });
};

// RECOMMMENTAIL DETAIL
exports.getRecommendation = (req, res) => {
  Recommendation.findById(req.params.id).populate('emontionRef').exec()
    .then((recommendation) => { return res.json(recommendation); })
    .catch(err => { res.status(500).json(err); });
};


/* POST CREATE AND SAVE Recommendation*/
exports.createRecommendation = (req, res) => {

  const emotionId = req.params.id;

  // 1 getEmotionRef
  let emotionRefPromise = new Promise((resolve, reject) => {
    Emotion.findById(emotionId).populate('userRef').exec()
      .then((emotion, err) => {
        // 2 Get Dictionary params PROMISE
        EmotionDic.find({ emotion_name: emotion.maxEmotion.name }).exec()
          .then((emotParams) => { resolve(emotParams); })
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  });


  // 3 Call to spotify service with params
  emotionRefPromise
    .then(emotParams => emotParams[0].urlParam ) // return a promise
    .then(url => spotifyService(url))
    .then(objPlayList => {
      console.log(objPlayList);

    let playList = recommendationAux.getDataSpotify(objPlayList);

    const newRecommendation = new Recommendation({
      emotionRef: emotionId,
      recommendations: playList
    });

    newRecommendation.save()
      .then(recommendation => {
        console.log(`New Recommendation User created! ID:${recommendation._id}`);
        res.status(200).json({
          message: 'New Recommendation has been created!',
          id: recommendation._id
        });
      })
      .catch(e => res.status(500).json(e));
  })
  .catch(err => {
    console.log(err);
  });
};
