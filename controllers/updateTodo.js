//import the model
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async(req,res)=>{
    try{
        // const id = req.params.id;
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt :Date.now()},
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:"Data updated successfully",
        });
    }
    catch(err){
        console.log("Error in updating Data");
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal sever error",
            message:"Server Error",
        });
    }
}