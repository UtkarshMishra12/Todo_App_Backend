//import the model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async(req,res)=>{
    try{
        //fetch all data from database
       const todos = await Todo.find({}); //it will bring all items without any condition
       //response
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"Entire Todo Data is fetched",
       });
    }
    catch(err){
        console.log("Error in fetching Data");
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal sever error",
            message:"Server Error",
        });
    }
}