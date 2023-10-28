const ToDoModel = require('../models/ToDoModels');

async function getToDos(req, res) {
    try {
        const toDos = await ToDoModel.find();
        res.status(200).json(toDos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getToDo(req, res) {
    try {
        const toDo = await ToDoModel.findById(req.params.id);
        res.status(200).json(toDo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createToDo(req, res) {
    const toDo = new ToDoModel({
        title: req.body.title,
        completed: req.body.completed
    });

    try {
        const newToDo = await toDo.save();
        res.status(201).json(newToDo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function updateToDo(req, res) {
    try {
        const toDo = await ToDoModel.findById(req.params.id);
        toDo.title = req.body.title;
        toDo.completed = req.body.completed;

        const updatedToDo = await toDo.save();
        res.status(200).json(updatedToDo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function deleteToDo(req, res) {
    try {
        const deletedToDo = await ToDoModel.findByIdAndDelete(req.params.id);
        if (!deletedToDo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(deletedToDo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    deleteToDo
};

module.exports = {
    getToDos,
    getToDo,
    createToDo,
    updateToDo,
    deleteToDo
};