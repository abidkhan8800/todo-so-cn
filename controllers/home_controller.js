const db = require('../config/mongoose')
const Task = require('../models/task');

// homepage to show all the tasks
module.exports.home = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error in creating task');
            return;
        }
        return res.render('home', {title: 'Todo App', tasks})
    });
    
};

// to add a new task
module.exports.addTask = function(req, res){
    let formattedDate;
    if(req.body.dueDate){
        let newDate = new Date(req.body.dueDate)
        let options = {year: 'numeric', month: 'long', day: 'numeric' };
        formattedDate = newDate.toLocaleDateString("en-US", options)
    }
    Task.create({
        description: req.body.description,
        category: (req.body.category)?req.body.category: "NA",
        dueDate: formattedDate,
    }, function(err, newTask){
        if(err){
            console.log('Error in creating task');
            return;
        }
        return res.redirect('back')
    })
};

// to delete single task
module.exports.deleteTask = function(req, res){
    Task.findByIdAndDelete(req.params.id, function(err){
       if(err){
           console.log('Error in deleting the task');
           return;
       }
       return res.redirect('back')
    });
}

// to delete multiple tasks at once
module.exports.deleteTasks = function(req, res){
    let arr = Object.keys(req.body)
    Task.deleteMany({_id:{
        $in: arr
    }}, function(err){
        if(err) {
            console.log("Error in deleting multiple tasks");
            return;
        }
        return res.redirect('back')
    })
}