//import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req,res)=>{
    try{
       const id = req.params.id;
       await Todo.findByIdAndDelete({_id:id});
       res.status(200).json({
        success:true,
        message:"Todo with the give id deleted",
       });
    }
    catch(error){
        console.log("Error in Deleting Data");
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal sever error",
            message:"Server Error",
        });
    }
}

