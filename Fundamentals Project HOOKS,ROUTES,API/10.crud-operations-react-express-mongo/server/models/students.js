const mongoose=require('mongoose');

const studentsSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    facultyNumber:{
        type:Number,
        required:true,
    },
    course:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Students',studentsSchema);