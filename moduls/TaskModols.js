const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title : {
        type : String,
        required : true,
     
    },
    description : {
        type : String,
     
    },
    useres : {
        type : String,
      
    },
    id : {
        type : String,
        required : true,
    },
    EndDate : {
        type : time,
        required : true,
    },
    Tasks : {
        type : String,
     
    },

},
{
  timestamps: true,
})


module.exports =  mongoose.model("Task", TaskSchema);