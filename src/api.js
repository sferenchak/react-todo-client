const API_URL = '/api/todos';

export async function getTodos() {
	return fetch(API_URL).then(res => {
		if (!res.ok) {
			if (res.status >= 400 && res.status < 500) {
				return res.json().then(data => {
					let err = { errorMessage: data.message };
					throw err;
				});
			} else {
				let err = {
					errorMessage: 'Please try again later, server is not responding'
				};
				throw err;
			}
		}
		return res.json();
	});
}

export async function createTodo(val) {
	return fetch(API_URL, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ name: val })
	}).then(res => {
		if (!res.ok) {
			if (res.status >= 400 && res.status < 500) {
				return res.json().then(data => {
					let err = { errorMessage: data.message };
					throw err;
				});
			} else {
				let err = {
					errorMessage: 'Please try again later, server is not responding'
				};
				throw err;
			}
		}
		return res.json();
	});
}

export async function deleteTodo(id) {
	const deleteURL = API_URL + '/' + id;
	return fetch(deleteURL, {
		method: 'DELETE'
	}).then(res => {
		if (!res.ok) {
			if (res.status >= 400 && res.status < 500) {
				return res.json().then(data => {
					let err = { errorMessage: data.message };
					throw err;
				});
			} else {
				let err = {
					errorMessage: 'Please try again later, server is not responding'
				};
				throw err;
			}
		}
		return res.json();
	});
}

export async function updateTodo(todo) {
	const updateURL = API_URL + '/' + todo._id;
	return fetch(updateURL, {
		method: 'PUT',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ completed: !todo.completed })
	}).then(res => {
		if (!res.ok) {
			if (res.status >= 400 && res.status < 500) {
				return res.json().then(data => {
					let err = { errorMessage: data.message };
					throw err;
				});
			} else {
				let err = {
					errorMessage: 'Please try again later, server is not responding'
				};
				throw err;
			}
		}
		return res.json();
	});
}
