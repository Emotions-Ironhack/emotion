mongoose = require('mongoose');
const Recommendation = require("./Recommendation");
const Emotion = require("../emotion/Emotion");

// GET
exports.listUserRecommendations = function(req, res) {
  Recommendation.findById(res.params.user_id)
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};


/* POST CREATE AND SAVE EMOTION*/
exports.createEmotion = function(req, res) {

  const newEmotion = new Emotion({
    userRef: req.body.userRef, // res.params.user_id ???¿??¿
    emotions: req.body.emotions,
    maxEmotion: req.body.maxEmotion,
    image_path: `/uploads/${req.file.filename}` || ''

  });

  newEmotion.save()
    .then(emotion => {
      console.log(`New emotion User created! ID:${emotion._id}`);
      res.status(200).json({
        message: 'New emotion has been created!',
        id: emotion._id
      });
    })
    .catch(e => res.status(500).json(e));
};
