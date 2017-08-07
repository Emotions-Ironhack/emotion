const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmotionDicSchema = new Schema({

emotion_name: String,
urlParam: String,
movies_genres: Array


});

module.exports = mongoose.model('Dictionary', EmotionDicSchema);
