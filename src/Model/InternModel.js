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
      type: String,
      trim: true,
      number: true,
      unique: true,
      required: [true, "mobile number is rrequirred"],
      validate: {
        validate: function (m) {
          return /^[1-9]{1}[0-9]{9}$/.test(m);
        },
        massage: "please enter a valid mobile",
      },
    },
    collegeId: {
      type: ObjectId,
      ref: 'College',
      required: [true, "please enter a collegeId "],
    },
    isDeleted: {
      type: boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intern", internSchema);
