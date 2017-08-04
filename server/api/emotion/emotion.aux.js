// getMaxEmotion
exports.getMaxEmotion = function (objScores) {

  // convert to Array
  let scoresArr = Object.entries(objScores);
  let maxEmotion = {
    name: '',
    score: 0
  };

  for (let i = 0; i < scoresArr.length - 1; i++) {
    if (scoresArr[i][1] > maxEmotion.score) {
      maxEmotion.name = scoresArr[i][0];
      maxEmotion.score = scoresArr[i][1];
    }
  }
  return maxEmotion;
};

// Create new Emotion and save
exports.saveEmotion = function (response, newEmotion) {

  newEmotion.save()
    .then(emotion => {
      console.log(`New emotion User created! ID:${emotion._id}`);
      response.status(200).json({
        message: 'New emotion has been created!',
        id: emotion._id
      });
    })
    .catch(e => response.status(500).json(e));
};
