const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


// Add a new task
function addTask() {

    const taskText = taskInput.value.trim();

    // Check for empty task
    if (taskText === "") {
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.className = "task-item";

    // Create task text
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // Mark task as completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    // Delete task
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add task to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Return focus to input
    taskInput.focus();
}


// Add task using button
addTaskButton.addEventListener("click", addTask);


// Add task using Enter key
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});
