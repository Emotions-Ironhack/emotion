mongoose = require('mongoose');
const Recommendation = require("./Recommendation");

// GET
exports.listUserRecommendations = function(req, res) {
  var id = req.params.emotion_id;
  Recommendation.find({RecommendationRef : id})
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};


/* POST CREATE AND SAVE Recommendation*/
exports.createRecommendation = function(req, res) {

  const newRecommendation = new Recommendation({
    emotionRef: req.params.emotion_id,
    Recommendations: req.body.recommendations

  });

  newRecommendation.save()
    .then(Recommendation => {
      console.log(`New Recommendation User created! ID:${recommendation._id}`);
      res.status(200).json({
        message: 'New Recommendation has been created!',
        id: Recommendation._id
      });
    })
    .catch(e => res.status(500).json(e));
};
