import React, { Component } from 'react';
import './TodoForm.css';

export default class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}
	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.props.addTodo(this.state.inputValue);
			this.setState({ inputValue: '' });
		}
	}
	render() {
		return (
			<section className='form'>
				<input
					className='todoInput'
					type='text'
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
					value={this.state.inputValue}
					placeholder='Insert your task here...'
				/>
			</section>
		);
	}
}
