const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChallengeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  joinCode: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Challenge', ChallengeSchema);