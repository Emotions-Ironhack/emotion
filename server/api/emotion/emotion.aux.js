// getMaxEmotion
exports.getMaxEmotion = function (objScores) {

  // convert to Array
  let scoresArr = Object.entries(objScores);
  let maxEmotion = {
    name: '',
    score: 0
  };

  for (let i = 0; i < scoresArr.length - 1; i++) {
    console.log(scoresArr[i][1]);
    if (scoresArr[i][1] > maxEmotion.score) {
      maxEmotion.name = scoresArr[i][0];
      maxEmotion.score = scoresArr[i][1];
    }
  }
  console.log('maxEmotion is: ', maxEmotion);
  return maxEmotion;
};

// Create new Emotion and save
exports.saveEmotion = function (req, res, newEmotion) {

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
