const router=require('express').Router();
const {createBlog}=require('../controller/createBlog');

router.post('/createBlog',createBlog);

module.exports=router;