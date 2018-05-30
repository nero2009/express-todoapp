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
	Todo.addTodo(todo,(err, todo)=>{
		if(err){
			res.send(err)
		}
		console.log('Todo Added..')
        res.redirect('/')
	})
})

router.delete('/delete/:id',(req,res,next)=>{
	const query = {_id: req.params.id}
	Todo.removeTodo(query,(err,todo)=>{
		if(err){
			res.send(err)
		}
		res.redirect('/')
	})
})

router.get('/edit/:id',(req,res,next)=>{
	const id = {_id: req.params.id}
	Todo.getTodoById(id,(err,todo)=>{
		if(err){
			res.send(err)
		}
		res.render('edit',{
			todo:todo
		})
	})
})

router.post('/edit/:id',(req,res,next)=>{
	const id = {_id: req.params.id}
	const update={
		text: req.body.text,
        body:req.body.body
	}
	Todo.updateTodo(id,update,{},(err,todo)=>{
		if(err){
			res.send(err)
		}
		res.redirect('/')
	})
})

module.exports = router