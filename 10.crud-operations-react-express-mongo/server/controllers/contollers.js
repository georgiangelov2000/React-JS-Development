const Students = require("../models/students");

exports.getStudents = async (req, res) => {
  await Students.find({})
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.newStudent = async (req, res) => {
  const students = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    facultyNumber: req.body.facultyNumber,
    course: req.body.course,
  };
  await Students.create(students)
    .then((student) => {
      res.json(student);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.deleteStudent= async (req,res)=>{
    const student={_id:req.params.id};
    Students.findByIdAndDelete(student)
    .then((student)=>{
      res.json(student);
    })
    .catch((error)=>{
       res.status(500).send(error.message)
    })
};

exports.getUpdateStudent = async (req, res) => {
  const student = { _id: req.params.id };
  await Students.findOne(student)
    .then((student) => {
      res.json(student);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.postUpdateStudent = async (req, res, next) => {
  const student = { _id: req.params.id };

  await Students.findByIdAndUpdate(student ,{
    $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        facultyNumber: req.body.facultyNumber,
        course: req.body.course,
    },
  })
    .then((student) => {
      res.json(student)
    })
    .catch((error) => {
      res.status(500).send(error.message)
    });
};


