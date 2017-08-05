mongoose = require('mongoose');
const Recommendation = require("./Recommendation");
const Emotion = require("../emotion/Emotion");
const EmotionDic = require("../emotion-dic/emotionSchema");
const spotifyService = require('../../config/spotify');


// RECOMMENDATIONS FOR A EMOTION ID. User can generate some recommendations for a the same Emotion ID
exports.listRecommendations = function(req, res) {

  // List recommendations by User
  Recommendation.find({
      emotionRef: emotionRef
    })
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json(err);
    });
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
  let emotionRefPromise = Emotion.findById(req.params.id).populate('userRef').exec()
    .then((emotion, err) => {
      if (err) return res.status(500).json(err);
      if (!emotion) return res.status(404).json(new Error("404"));

      console.log('emotion Recccc', emotion);


      // 2 Get Dictionary params
      EmotionDic.find({ emotions: maxEmotion }).exex().then( emotionParams =>{

      });

    })
    .catch(err => {
      res.status(500).json(err);
    });








  // 3 Call to spotify service with params
  // let spotifyPromise = new Promise((resolve, reject) => {
  //
  //   emotionRefPromise.then((emotion, err) => {
  //       if (err) return res.status(500).json(err);
  //       if (!emotion) return res.status(404).json(new Error("404"));
  //

          // 3.1 Dictionary Call


  //       // 3.2 Call to spotify SERVICE
  //       let objPlayList = spotifyService();
  //
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // });






  // 4 Create Recommendation
  // spotifyPromise.then(objEmotion => {
  //
  //   let maxEmotionObj = emotionAux.getMaxEmotion(objEmotion[0].scores);
  //
  //   const newEmotion = new Emotion({
  //     userRef: objEmotion.userRef,
  //     emotions: objEmotion[0].scores,
  //     maxEmotion: maxEmotionObj,
  //     image_path: objEmotion.imageURL
  //   });
  //
  //   console.log('NEW EMOTION', newEmotion);
  //
  //   emotionAux.saveEmotion(res, newEmotion);
  // }).catch(err => console.log('Error visionPromise: ', err));
  //
  //
  //
  //
  //
  // const newRecommendation = new Recommendation({
  //   emotionRef: req.params.emotionId,
  //   Recommendations: 'Spotify json response'
  //
  // });
  //
  // newRecommendation.save()
  //   .then(Recommendation => {
  //     console.log(`New Recommendation User created! ID:${recommendation._id}`);
  //     res.status(200).json({
  //       message: 'New Recommendation has been created!',
  //       id: Recommendation._id
  //     });
  //   })
  //   .catch(e => res.status(500).json(e));
};
