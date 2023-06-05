const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

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
    JoinCode: {
        type: String,
        required: true
    }

},

{
    timestamps: true
});

mongoose.model.exports = mongoose.model('Challenge', ChallengeSchema);