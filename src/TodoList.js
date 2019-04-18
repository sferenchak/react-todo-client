import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './TodoList.css';
import * as apiCalls from './api';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};

		this.addTodo = this.addTodo.bind(this);
	}
	componentWillMount() {
		this.loadTodos();
	}

	async loadTodos() {
		let todos = await apiCalls.getTodos();
		this.setState({ todos });
	}

	async addTodo(val) {
		let newTodo = await apiCalls.createTodo(val);
		this.setState({ todos: [...this.state.todos, newTodo] });
	}

	async deleteTodo(id, e) {
		e.stopPropagation();
		await apiCalls.deleteTodo(id);
		const todos = this.state.todos.filter(todo => todo._id !== id);
		this.setState({ todos: todos });
	}

	async toggleTodo(todo) {
		let updatedTodo = await apiCalls.updateTodo(todo);
		const todos = this.state.todos.map(todo =>
			todo._id === updatedTodo._id
				? { ...todo, completed: !todo.completed }
				: todo
		);
		this.setState({ todos: todos });
	}

	render() {
		const todos = this.state.todos.map(todo => (
			<TodoItem
				key={todo._id}
				{...todo}
				onDelete={this.deleteTodo.bind(this, todo._id)}
				onToggle={this.toggleTodo.bind(this, todo)}
			/>
		));
		return (
			<div>
				<header>
					<h1>Todo List</h1>
					<h2>
						Simple Todo List using React Frontend and Node/Express/MongoDB
						Backend
					</h2>
				</header>
				<TodoForm addTodo={this.addTodo} />
				<ul className='list'>{todos}</ul>
			</div>
		);
	}
}
