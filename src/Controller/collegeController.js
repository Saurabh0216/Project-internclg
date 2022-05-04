const collegeModel = require("../Model/collegeModel");
//const internModel = require("../Model/InternModel");

const CreateCollege = async function (req, res) {
  try {
    let data = req.body;
    if (!data.name) {
      return res
        .status(400)
        .send({ status: false, msg: "college creation not all" });
    }
    if (Object.keys(data.name).length == 0 || data.name.length == 0) {
      return res
        .status(400)
        .send({ status: false, data: "Enter a valid Name" });
    }
    if (!data.fullName) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter a full collegeName" });
    }
    if(Object.keys(data.fullName).length == 0 || data.fullName == 0){
      return res.status(400).send({status:false, msg:"Enter a valid full collegeName"})
    }
    if (!data.logoLink) {
      return res
        .status(400)
        .send({ status: false, msg: "plz giving the logoLink" });
    }
    if (Object.keys(data.fullName).length == 0 || data.fullName == 0){
      return res.status(400).send({status:false, data: " Plz Enter valid logoLink"})
    }

    let saved = await collegeModel.create(data);
    res.status(201).send({ status: true, data: saved });
  }
  catch (err) {
    res.status(500).send({status:false, msg:err.massege})
  }
};

module .exports.CreateCollege = CreateCollege