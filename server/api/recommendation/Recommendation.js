const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  emotionRef : { type: Schema.Types.ObjectId, ref: 'Emotion' },
  recommendations : []
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
   }
});


module.exports = mongoose.model('Recommendation', RecommendationSchema);
