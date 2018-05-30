const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
	body:{
		type:string
	},
	text:{
		type:string
	}
})
const Todo =(module.exports = mongoose.model("Todo", todoSchema))

module.exports.getTodos = function getTodos(callback){
	Todo.find(callback)
}

module.exports.addTodo = function addTodos(todo,callback){
	Todo.create(todo,callback)
}

module.exports.updateTodo = function updateTodo(query,update,options, callback){
	Todo.findOneAndUpdate(query, update, options, callback)
}

module.exports.removeTodo = function removeTodo(query,callback){
	Todo.remove(query, callback)
}

module.exports.getTodoById = function getTodoById(id,callback){
	Todo.findById(id,callback)
}