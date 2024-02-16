document.addEventListener('DOMContentLoaded', function () {
    const logoutLink = document.getElementById('logout-link');
    const todoList = document.getElementById('todo-list');
    let completedTaskCount = 0;

    logoutLink.addEventListener('click', function (event) {
        event.preventDefault();
        
        window.location.href = 'index.html';
    });

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            // Display todos
            displayTodos(data);
            // Check if 5 todos are completed
            checkCompletedTodos(data);
        })
        .catch(error => console.error('Error fetching todos:', error));

    function displayTodos(todos) {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    completedTaskCount++;
                } else {
                    completedTaskCount--;
                }
                checkCompletedTodos();
            });
            const todoText = document.createElement('span');
            todoText.textContent = todo.title;
            todoItem.appendChild(checkbox);
            todoItem.appendChild(todoText);
            todoList.appendChild(todoItem);
        });
    }

    function checkCompletedTodos() {
        if (completedTaskCount === 5) {
            alert(`Congrats. 5 Tasks have been Successfully Completed`);
        }
    }
});
