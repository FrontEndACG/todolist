const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

todoInput.addEventListener('input', onInputTodo);
addTodoBtn.addEventListener('click', onAddTodo);

function onInputTodo(event) {
	if (event.target.value.length > 0) {
		addTodoBtn.removeAttribute('disabled');
	} else {
		addTodoBtn.setAttribute('disabled', true);
	}
}

function onAddTodo() {
	const todoLi = createTodoLi(todoInput.value);

	if (todoLi) {
		todoList.appendChild(todoLi);
	}
	todoInput.value = '';
	addTodoBtn.setAttribute('disabled', true);

	updateNoOfTodos();
}

function createTodoLi(text) {
	if (text.trim().length === 0) {
		alert('Introduceti un task valid!');
		return;
	}

	const todoLi = document.createElement('li');
	const todoTextSpan = document.createElement('span');
	const deleteTodoBtn = document.createElement('button');

	todoTextSpan.innerHTML = text;
	deleteTodoBtn.innerHTML = 'X';

	todoLi.appendChild(todoTextSpan);
	todoLi.appendChild(deleteTodoBtn);

	return todoLi;
}

function updateNoOfTodos() {
	const noOfTodoContainer = document.getElementById('no-of-todos');
	const noOfTodos = todoList.querySelectorAll('li').length;
	noOfTodoContainer.innerHTML = noOfTodos + ' todos';
}
