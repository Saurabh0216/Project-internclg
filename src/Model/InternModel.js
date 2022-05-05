const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    mobile: {
      type: Number,
      trim: true,
      unique: true,
      required: [true, "mobile number is required"],
      validate: {
        validator:function(v) {
          return /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(v)
        },
        message:"Please enter a valid mobile number"
      }
      
    },
    collegeId: {
      type: ObjectId,
      ref: 'College',
      required: [true, "please enter a collegeId "],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },{ timestamps: true }
);

module.exports = mongoose.model("Intern", internSchema);
