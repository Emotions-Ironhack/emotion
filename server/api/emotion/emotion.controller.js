mongoose = require('mongoose');
const User = require("../auth/User");
const Emotion = require("./Emotion");
const visionService = require('../../config/vision');

// GET
exports.listUserEmotionsHistory = function(req, res) {

  console.log(req.params.user_id);
  var id = req.params.user_id;
  Emotion.find({
      userRef: id
    }).exec()
    .then(list => {
      console.log('LIST', list);
      res.json(list);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};



// POST to VISION API an return DATA
/* AND THEN CREATE AND SAVE EMOTION*/
exports.createEmotion = function(req, res) {
 console.log('REQ PARAMS ID:', req.params.user_id);

  // 1 - Image from client
  let urlImage = "https://i.blogs.es/ceed5d/cara-delevigne-para-moschino/400_300.jpg";

  // 2 - Call to API Vision
  //visionService(urlImage);
  var request = require('request');

  var headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': 'e1db3facd5f9497d8da470ad49545477'
  };

  var options = {
    url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
    method: 'POST',
    body: "{'url': '" + urlImage + "' }",
    headers: headers,
  };

  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);

      console.log(obj[0].scores, 'dsasda');

      let maxEmotionObj = getMaxEmotion(obj[0].scores);
      createEmotion(req.params.user_id, obj[0].scores, maxEmotionObj, urlImage);

    } else {
      console.log('ERROR: ', error);
    }
  });


  // 2 getMaxEmotion
  function getMaxEmotion(objScores) {

    // convert to Array
    let scoresArr = Object.entries(objScores);
    let maxEmotion = { name: '', score: 0 };

    for (let i = 0; i < scoresArr.length - 1; i++) {
      console.log(scoresArr[i][1]);
      if (scoresArr[i][1] > maxEmotion.score) {
        maxEmotion.name = scoresArr[i][0];
        maxEmotion.score = scoresArr[i][1];
      }
    }
    console.log('maxEmotion is: ', maxEmotion);
    return maxEmotion;
  }

  // 3 - Create new Emotion and save
  function createEmotion(user_id, objScores, maxEmotion, urlImage) {

    const newEmotion = new Emotion({
      userRef: user_id,
      emotions: objScores,
      maxEmotion: maxEmotion,
      image_path: urlImage, //`/uploads/${req.file.filename}` || ''

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
  }

};
