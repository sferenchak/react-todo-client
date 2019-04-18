import React from 'react';

const TodoItem = ({ name, completed, onDelete, onToggle }) => (
	<li className={completed ? 'task done' : 'task'} onClick={onToggle}>
		{name}
		<div className='delete' onClick={onDelete}>
			X
		</div>
	</li>
);

export default TodoItem;
