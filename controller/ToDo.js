const ToDoModel = require("../models/ToDoModel")

class ToDoController {
    constructor() {
        this.ToDoCounter = 0;
        this.ToDo = []
    };

    async getToDo(req, res) {
        const result = await ToDoModel.find().exec();
        return res.json(result);
    };

    addDataList(req, res) {
        const newItemList = req.body;
        const { str } = newItemList;
        const newToDo = new ToDoModel({ str, boolean: false })
        newToDo.save(e => {
            if (e) {
                return res.sendStatus(400);
            }
            return res.sendStatus(200)
        });
    };

    async updateBoolean(req, res){
        const { id } = req.params;
        const todo = await ToDoModel.findById(id);
        if(!todo) {
            return res.sendStatus(404);
        }

        todo.boolean = !todo.boolean;
        todo.save(e => {
            if (e) {
                return res.sendStatus(400);
            }
            return res.json(todo);
        });
    }
}

module.exports = ToDoController;