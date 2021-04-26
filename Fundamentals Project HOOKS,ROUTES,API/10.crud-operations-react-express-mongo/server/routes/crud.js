const express=require('express');
const router=express.Router();
const{
    getStudents,
    newStudent,
    deleteStudent,
    getUpdateStudent,
    postUpdateStudent,
}=require('../controllers/contollers');

router.route('/students').get(getStudents);
router.route('/new/student').post(newStudent);
router.route('/delete/student/:id').delete(deleteStudent);
router.route('/update/student/:id').get(getUpdateStudent);
router.route('/update/student/:id').put(postUpdateStudent);

module.exports=router;