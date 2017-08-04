const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emotionSchema = new Schema({
  userRef : { type: Schema.Types.ObjectId, ref: 'User' },
  emotions : { type: Object, default: {} },
  maxEmotion: { type: Object },
  image_path : { type: String }
});

module.exports = mongoose.model('Emotion', emotionSchema);
