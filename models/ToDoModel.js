const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema(
    {
        id: {
            type: Number
        },
        str:{
            type: String
        },
        boolean:{
            type: Boolean
        }
    }
)


module.exports = mongoose.model("ToDo", ToDoSchema);