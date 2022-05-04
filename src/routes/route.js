const express = require("express");
const router = express.Router();
const collegeController = require("../Controller/collegeController");
const internController = require("../Controller/internsController")

router.post("/functionup/colleges",collegeController.CreateCollege);
router.post("/functionup/interns",internController.CreateInterns);
router.get("/functionup/collegeDetails",collegeController.CollegeDetails);


module.exports =router