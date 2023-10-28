const{Router} = require("express");
const { getToDo, createToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/create", createToDo);
router.put("/:id", updateToDo);
router.delete("/:id", deleteToDo);


module.exports = router;