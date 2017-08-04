const User = require("../auth/User");
const Emotion = require("./Emotion");
const visionService = require('../../config/vision');
const emotionAux = require('./emotion.aux');
const upload = require('../../config/multerService');

// GET
exports.listUserEmotionsHistory = function(req, res) {

  Emotion.find({
      userRef: id
    }).exec()
    .then(list => {
      res.json(list);
    }).catch(err => {
      res.status(500).json(err);
    });
};



// POST to VISION API -> THEN CREATE AND SAVE EMOTION */
exports.createEmotion = function(req, res) {

  // function uploadTotal() {
    let requestUpload = new Promise((resolve, reject) => {
      upload(req, res, function(err) {
        console.log(req.file);
        if (req.file.filename) {
          urlImage = 'https://i.blogs.es/ceed5d/cara-delevigne-para-moschino/400_300.jpg';
          resolve(urlImage);
        } else {
          // reject( err => { urlImage = "https://i.blogs.es/ceed5d/cara-delevigne-para-moschino/400_300.jpg";
          //   return urlImage;
          // });
        }

      });

    }); // end promise

  // 2 - Call to API Vision
  let visionPromise = new Promise((resolve, reject) => {

    // upload image THEN
    requestUpload.then( urlImage => {
      let objEmotion = visionService(urlImage);
      resolve(objEmotion);
    });
  });

  // 3 - Create new emotion
  visionPromise.then(obj => {
    let maxEmotionObj = emotionAux.getMaxEmotion(obj[0].scores);

    const newEmotion = new Emotion({
      // userRef: '',
      emotions: obj[0].scores,
      maxEmotion: maxEmotionObj,
      image_path: ''
    });

    emotionAux.saveEmotion(res, newEmotion);
  }).catch(err => console.log('Error visionPromise: ', err));

};
