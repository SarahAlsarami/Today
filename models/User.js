const mongoose = require("mongoose");




const Schema = mongoose.Schema;




const userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    challenges: [{
        type: Schema.Types.ObjectId,
        ref: 'Challenge'
    }]
    

});

module.exports = mongoose.model("User", userSchema);