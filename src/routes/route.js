const express = require("express");
const router = express.Router();
const collegeController = require("../Controller/collegeController");

router.post("/Createcollege",collegeController.CreateCollege);


module.exports =router