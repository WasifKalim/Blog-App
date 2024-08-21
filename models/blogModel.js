const mongoose=require('mongoose');

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:50
    },
    description:{
        type:String,
        required:true,
        maxlength:500
    },
    createdAt:{
        type:String,
        required:true,
        default:new Date(Date.now()).toLocaleString()
    },

    updatedAt:{
        type:String,
        required:true,
        default:new Date(Date.now()).toLocaleString()
    }
});



const  blogModel=mongoose.model('blogModel',blogSchema);

module.exports=blogModel;