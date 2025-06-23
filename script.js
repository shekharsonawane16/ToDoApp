function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const taskList = document.getElementById('task-list');

    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Create task text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    span.onclick = function() {
        this.classList.toggle('completed');
    };

    // Create delete button
    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.textContent = 'Delete';
    btn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(btn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}

// Optional: Add task on Enter key
document.getElementById('new-task').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});