document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const timerInput = document.getElementById('timer-input');
    const taskList = document.getElementById('task-list');

    const task = taskInput.value;
    const timer = timerInput.value;

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${task} - ${timer} mins`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    timerInput.value = '';
});