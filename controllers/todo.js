const express =require('express')
const todoController = express.Router()
const mongoose = require('mongoose')
const Todo = require('../models/todo.js')


/////////////////////////
//Presentational Routes//
/////////////////////////

//////Index route////////
todoController.get('/', (req,res)=>{
    const thisRunsNext=  (error, allTodos) => {
        if(error){
            console.log(error)
        }else{
            const props= {
                todos: allTodos,
            }
        res.render('Index', props)
        }
    }
    Todo.find({}, thisRunsNext)
})



/////////////////////////
////Functional Routes////
/////////////////////////
////Create Route////
todoController.post('/', (req, res)=>{
    if(req.body.done === 'on'){
        req.body.done = true
    }else{
        req.body.done = false
    }
    console.log(req.body)
    Todo.create(req.body, (error, createdTodo)=> {
        if(error){
            console.log(error)
        }else{
        
            res.redirect('/todo')
            
            
        }
    })
});





module.exports = todoController