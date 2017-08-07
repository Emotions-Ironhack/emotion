mongoose = require('mongoose');
const Recommendation = require("./Recommendation");
const Emotion = require("../emotion/Emotion");
const EmotionDic = require("../emotion-dic/emotionSchema");
const spotifyService = require('../../config/spotify');


// RECOMMENDATIONS FOR A EMOTION ID. User can generate some recommendations for a the same Emotion ID
exports.listRecommendations = function(req, res) {
  let emotionRef = req.params.id;
  Recommendation.find({ emotionRef: req.params.id })
    .then(list => { res.json(list); })
    .catch(err => { res.status(500).json(err); });
};

// RECOMMMENTAIL DETAIL
exports.getRecommendation = (req, res, next) => {
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
  let spotifyPromise = new Promise((resolve, reject) => {
    emotionRefPromise.then(emotParams => {                          // 3.1 When emotionParams is resolved call to spotify API
      let objPlayList = spotifyService(emotParams[0].urlParam);     // 3.2 Call to spotify SERVICE when emotionRed
      resolve(objPlayList);
    });

  });

  // 4 THEN spotifyPromise -> we can create new Recommendation and Save it
  spotifyPromise.then(objPlayList => {
    const newRecommendation = new Recommendation({
      emotionRef: emotionId,
      recommendations: objPlayList
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
  });
};
