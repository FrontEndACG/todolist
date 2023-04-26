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
	todoList.appendChild(todoLi);
	todoInput.value = '';
	addTodoBtn.setAttribute('disabled', true);
}

function createTodoLi(text) {
	const todoLi = document.createElement('li');
	const todoTextSpan = document.createElement('span');
	const deleteTodoBtn = document.createElement('button');

	todoTextSpan.innerHTML = text;
	deleteTodoBtn.innerHTML = 'X';

	todoLi.appendChild(todoTextSpan);
	todoLi.appendChild(deleteTodoBtn);

	return todoLi;
}
