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

exports.getTodoById = async (req,res) =>{
    try{
        //extract ToDo items based on Id
        const  id= req.params.id;
        const todo = await Todo.findById({_id: id});

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                succes:false,
                message:"No data found for given Id",
            });
        }
        //Data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Data for the ${id} fetched successfully`,
        });

    }
    catch(error){
        console.log("Error in Fetching data for id");
        console.error(error);
        res.status(500).json({
            success:false,
            data:"Error",
            message:"Error in fetching data for given Id",
        });
    }
}