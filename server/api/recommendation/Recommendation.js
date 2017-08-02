const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  emotionRef : { type: Schema.Types.ObjectId, ref: 'Emotion' },
  recommendations : []
});


module.exports = mongoose.model('Recommendation', RecommendationSchema);
