const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            lowercase:true,
            unique:true,
            trim:true,
            required:[true, 'Name is required']
        },
        fullName:{
            type:String,
            trim:true,
            required:[true, 'Full college Name ie required']
        },
        logoLink:{
            type:String,
            trim: true,
            required:[true, 'logoLink is required'],
            validate: {
                validator:function(v) {
                  return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&\/\/=]*)/.test(v)
                },
                message:"Please enter a valid logoLink"
              }
        },
        isDeleted:{
            type:Boolean,
            default:false
        },
    }, {timeStamp:true}
);

module.exports=mongoose.model('College', collegeSchema)

 