const User = require("../auth/User");
const Emotion = require("./Emotion");
const visionService = require('../../config/vision');
const emotionAux = require('./emotion.aux');
const upload = require('../../config/multerService');

// EMOTIONS USER LIST
exports.listUserEmotions = (req, res)=> {

  let userRef = req.params.userId;

  Emotion.find({
      userRef: userRef
    }).exec()
    .then(list => {
      res.json(list);
    }).catch(err => {
      res.status(500).json(err);
    });
};



// EMOTION DETAIL
exports.getEmotion = (req, res) => {

  Emotion.findById(req.params.id).populate('userRef').exec()
    .then((emotion, err) => {

      if (err) return res.status(500).json(err);
      if (!emotion) return res.status(404).json(new Error("404"));

      return res.json(emotion);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};



// POST to VISION API -> THEN CREATE AND SAVE EMOTION */
exports.createEmotion = (req, res)=> {

  // function uploadTotal() {
  let requestUpload = new Promise((resolve, reject) => {
    upload(req, res, function(err) {

      let infoImage = {};
      if (req.body.userRef) infoImage.userRef = req.body.userRef;

      if (req.file) {

        // check if url is localhost
        console.log('HOSTNAME: ',req.get('host'));

        if (req.get('host').includes('localhost'))
          infoImage.url = 'http://marioms.com/scarlet2.jpg';
        else
          infoImage.url = req.file.filename;

        resolve(infoImage);

      } else {
        reject(err => {
          console.loog('ERROR in Server createEmotion Reject: ',err);
          infoImage.url = "http://marioms.com/scarlet2.jpg";
          return infoImage;
        });
      }

    });

  }); // end promise

  // 2 - Call to API Vision
  let visionPromise = new Promise((resolve, reject) => {
    // upload image THEN
    requestUpload.then(infoImage => {
      let objEmotion = visionService(infoImage.url, infoImage.userRef);
      resolve(objEmotion);
    });
  });

  // 3 - Create new emotion
  visionPromise.then(objEmotion => {

    let maxEmotionObj = emotionAux.getMaxEmotion(objEmotion[0].scores);

    const newEmotion = new Emotion({
      userRef: objEmotion.userRef,
      emotions: objEmotion[0].scores,
      maxEmotion: maxEmotionObj,
      image_path: objEmotion.imageURL
    });

    console.log('NEW EMOTION', newEmotion);

    emotionAux.saveEmotion(res, newEmotion);
  }).catch(err => console.log('Error visionPromise: ', err));

};
