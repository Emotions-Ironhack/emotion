const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmotionDicSchema = new Schema({

emotions: Array,

});

module.exports = mongoose.model('Dictionary', EmotionDicSchema);
