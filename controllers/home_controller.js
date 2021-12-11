const db = require('../config/mongoose')
const Task = require('../models/task');

module.exports.home = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error in creating task');
            return;
        }
        return res.render('home', {title: 'Todo App', tasks})
    });
    
};

module.exports.addTask = function(req, res){
    Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate,
    }, function(err, newTask){
        if(err){
            console.log('Error in creating task');
            return;
        }
        return res.redirect('back')
    })
};

module.exports.deleteTask = function(req, res){
    Task.findByIdAndDelete(req.params.id, function(err){
       if(err){
           console.log('Error in deleting the task');
           return;
       }
       return res.redirect('back')
    });
}