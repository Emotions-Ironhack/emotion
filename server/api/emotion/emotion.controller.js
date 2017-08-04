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

        let infoImage = {};
        if (req.body.userRef) infoImage.userRef = req.body.userRef;

        if (req.file.filename) {

          // check if url is localhost
          if(req.get('host').includes('localhost'))
            infoImage.url = 'http://marioms.com/scarlet2.jpg';
          else
            infoImage.url = req.file.filename;

          resolve(infoImage);

        } else {
          reject( err => {
            console.loog(err);
            infoImage.url = "http://marioms.com/scarlet2.jpg";
            return infoImage;
          });
        }

      });

    }); // end promise

  // 2 - Call to API Vision
  let visionPromise = new Promise((resolve, reject) => {

    // upload image THEN
    requestUpload.then( infoImage => {

      console.log('INFOIMAGE',infoImage);
      // let objEmotion = {};
      // objEmotion.scores = {};
      // objEmotion.imageURL = infoImage.url;
      // objEmotion.userRef = infoImage.userRef;
      let objEmotion = visionService(infoImage.url, infoImage.userRef);

      resolve(objEmotion);
    });
  });

  // 3 - Create new emotion
  visionPromise.then( objEmotion => {

    console.log('object',objEmotion);

    let maxEmotionObj = emotionAux.getMaxEmotion(objEmotion[0].scores);

    const newEmotion = new Emotion({
      userRef: objEmotion.userRef,
      emotions: objEmotion[0].scores,
      maxEmotion: maxEmotionObj,
      image_path: objEmotion.imageURL
    });
    console.log('NEW EMOTION',newEmotion);

    emotionAux.saveEmotion(res, newEmotion);
  }).catch(err => console.log('Error visionPromise: ', err));

};
