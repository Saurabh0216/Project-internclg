const mongoose = require('mongoose')

const collegeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
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
            required:[true, 'logoLink is required']

        },
        isDeleted:{
            type:Boolean,
            default:false
        },
    }, {timeStamp:true}
);

module.exports=mongoose.model('College', collegeSchema)

 