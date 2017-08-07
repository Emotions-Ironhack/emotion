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

  // 1 getEmotionRef IS THE SAME FUNCTION IN Emotion.controller REFACTOR
  let emotionRefPromise = new Promise( (resolve ,reject) => {

    let emotionId = req.params.id;

    Emotion.findById(emotionId).populate('userRef').exec()
      .then((emotion, err) => {

      if (err) return res.status(500).json(err);
      if (!emotion) return res.status(404).json(new Error("404"));

      let infoEmotion = {};
      infoEmotion.id = emotionId;
      infoEmotion.maxEmotion = emotion.maxEmotion.name;

      // 2 Get Dictionary params PROMISE
      EmotionDic.find({emotion_name: infoEmotion.maxEmotion }).exec()
        .then( (emotParams, err) => {
          if(err) return console.log('ERROR EmotionDic find',err);
          resolve(emotParams);
        });
    });
  });


  // 3 Call to spotify service with params
  let spotifyPromise = new Promise((resolve, reject) => {

    // 3.1 When emotionParams is resolved call to spotify API
    emotionRefPromise.then( emotParams => {
      console.log('IN SPOTIFY PROMISE: ', emotParams);

      // 3.2 Call to spotify SERVICE when emotionRed
      let objPlayList = spotifyService(emotParams[0].urlParam);
      resolve(objPlayList);
    });

  });


  // 4 THEN spotifyPromise -> we can create new Recommendation and Save it
  spotifyPromise.then( objPlayList => {
    // res.json(objPlayList);

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
