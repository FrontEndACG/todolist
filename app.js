const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-btn');

todoInput.addEventListener('input', onInputTodo);

function onInputTodo(event) {
	if (event.target.value.length > 0) {
		addTodoBtn.removeAttribute('disabled');
	} else {
		addTodoBtn.setAttribute('disabled', true);
	}
}
