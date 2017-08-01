mongoose = require('mongoose');
const User = require("../auth/User");
const Emotion = require("./Emotion");

// GET
exports.listUserEmotionsHistory = function(req, res) {
  console.log(req.params.user_id);
  Emotion.find().exec()
    .then(list => {
      console.log('LIST',list);
      res.json(list);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};


/* POST CREATE AND SAVE EMOTION*/
exports.createEmotion = function(req, res) {
  console.log(req.file);

  const newEmotion = new Emotion({
    userRef: req.params.user_id,
    emotions: req.body.emotions,
    maxEmotion: req.body.maxEmotion,
    image_path: '', //`/uploads/${req.file.filename}` || ''

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
