const mongoose = require('mongoose')
const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
})

module.exports = mongoose.model('ToDo', ToDoSchema)