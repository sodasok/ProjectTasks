
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert("Please enter a task.");
    return;
  }

  
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.onclick = () => toggleComplete(taskSpan);

  const deleteBtn = document.createElement('span');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✕';
  deleteBtn.onclick = () => deleteTask(taskItem);

 
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

 
  taskInput.value = '';
}


function toggleComplete(taskSpan) {
  taskSpan.parentNode.classList.toggle('completed');
}


function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}