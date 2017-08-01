mongoose = require('mongoose');
// const User = require("../auth/User");
const Emotion = require("./Emotion");

// GET
exports.listUserEmotionsHistory = function(req, res) {
  Emotion.findById(res.params.user_id)
    .then(list => {
      console.log(list);
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
