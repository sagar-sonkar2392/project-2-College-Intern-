const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    mobile:{
        type:String,
        required:true,
        unique:true
    },

    collegeId:{
        type:ObjectId,
        required:true,
        ref:"College"
    },

    isDeleted:{
        type:Boolean,
        default:false
    }

});
module.exports = mongoose.model('intern', internSchema);