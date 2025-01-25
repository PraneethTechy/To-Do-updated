const addTaskBtn = document.querySelector('.btn'); // Button to add a task
const taskInput = document.querySelector('.addtaskinput'); // Input field for tasks
const taskList = document.querySelector('#taskList'); // The task list (ul)
const completedTasks = document.querySelector('#completedTasks'); // Completed tasks list

function addTask() {
    const taskText = taskInput.value.trim(); // Get the input value
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li'); // Create a new list item
    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="textooo">${taskText}</span>
        <button class="delete-btn">
            <img src="bin.png" alt="Delete" class="delete-icon">
        </button>
    `;

    taskList.appendChild(li); // Add the new task to the list
    taskInput.value = ''; // Clear the input field
}

// Add event listener to the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Add task on pressing "Enter" key
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Handle dynamic events using event delegation
taskList.addEventListener('click', (event) => {
    if (event.target.matches('.delete-btn, .delete-btn *')) {
        const li = event.target.closest('li');
        li.remove();
    } else if (event.target.matches('.task-checkbox')) {
        const checkbox = event.target;
        const li = checkbox.closest('li');
        if (checkbox.checked) {
            // Move to Completed Tasks section
            completedTasks.appendChild(li);
            li.querySelector('span').style.textDecoration = 'line-through';
        } else {
            // Move back to the Task List section
            taskList.appendChild(li);
            li.querySelector('span').style.textDecoration = 'none';
        }
    }
});
