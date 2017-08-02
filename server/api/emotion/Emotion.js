const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emotionSchema = new Schema({
  userRef : { type: Schema.Types.ObjectId, ref: 'User' },
  emotions : { type: Array, default: [] },
  maxEmotion: { type: Object },
  image_path : { type: String }
});

// // Initialize virtual schema
// emotionSchema.set('toJSON', { virtuals: true });
//
// // Create new virtual schema
// emotionSchema.virtual('imageURL').get(function() {  // imageURL is the attr name in the form
//   if(this.image.includes('http')){
//     return this.image;
//   }
//   return `http://localhost:3000${this.image}`;
// });

module.exports = mongoose.model('Emotion', emotionSchema);
