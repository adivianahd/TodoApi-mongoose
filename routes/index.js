var express = require('express');
var cors = require("cors");
var router = express.Router();

const ToDoController = require("../controller/ToDo");
const ToDoInstance = new ToDoController();

router.use(cors());

router.get('/',(req, res) => {
 ToDoInstance.getToDo(req, res);
});

router.post('/',(req, res) => {
  ToDoInstance.addDataList(req, res);
 });

router.put('/:id/toggle',(req, res) => {
  ToDoInstance.updateBoolean(req, res);
 });


module.exports = router;
