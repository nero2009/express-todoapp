const express = require('express')
const router = express.Router()

const Todo = require('../models/todos.js')

router.get("/",(req,res,next)=>{
	Todo.getTodos((err,todos)=>{
		res.render('index',{
			todos:todos
		})
	})
})

router.post("/add",(req,res,next)=>{
	const todo ={
        text: req.body.text,
        body:req.body.body
    }
	Todo.addTodo(todo(err, todo)=>{
		if(err){
			res.send(err)
		}
		console.log('Todo Added..')
        res.redirect('/')
	})
})

router.delete('/delete/:id',(req,res,next)=>{
	const query = {_id: ObjectID(req.params.id)}
	Todo.removeTodo(query,(err,todo)=>{
		if(err){
			res.send(err)
		}
		res.status(200)
	})
})

router.get('/edit/:id',(req,res,next)=>{
	const id = {_id: ObjectID(req.params.id)}
	Todo.getTodoById(id,(err,todo)=>{
		if(err){
			res.send(err)
		}
		res.render('edit',{
			todo:todo
		})
	})
})

module.exports = router