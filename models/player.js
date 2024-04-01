const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  userName: String,
  totalWins: Number,
});

module.exports = mongoose.model('Player', playerSchema);
