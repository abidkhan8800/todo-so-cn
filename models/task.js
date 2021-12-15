const mongoose = require('mongoose');
// Task Model
const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    dueDate:{
        type: String,
        required: false
    },
    category:{
        type: String,
        required: false
    }
    
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;