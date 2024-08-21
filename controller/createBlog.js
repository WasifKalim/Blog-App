const blogModel=require('../models/blogModel');
exports.createBlog=async (req,res)=> {
    const {title,description}=req.body;
    try {
        const response=await blogModel.create({
            title:title,
            description:description
        }) 
        res.json({
            status:200,
            message:"Data inserted",
            data:response.data
        })

    } catch (error) {
        //console.log("Data not inserted..");
        console.error(error);
        res.json({
            status:500,
            message:"Data not inserted..",

        })
    }
}