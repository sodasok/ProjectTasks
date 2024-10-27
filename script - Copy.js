// Selectors
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert("Please enter a task.");
    return;
  }

  // Create task elements
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.onclick = () => toggleComplete(taskSpan);

  const deleteBtn = document.createElement('span');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✕';
  deleteBtn.onclick = () => deleteTask(taskItem);

  // Append elements
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
}

// Function to toggle task completion
function toggleComplete(taskSpan) {
  taskSpan.parentNode.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}