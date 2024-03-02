document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');

    // Sample tasks array
    const sampleTasks = ['Task 1', 'Task 2', 'Task 3'];

    // Add sample tasks to the pending tasks list
    sampleTasks.forEach(taskText => {
        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
    });

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = taskForm.querySelector('.task-input');
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
        taskInput.value = '';
    });

    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskItem.remove();
                const completedTaskItem = createCompletedTaskItem(taskText);
                completedTasksList.appendChild(completedTaskItem);
            }
        });

        const markCompleted = document.createElement('span');
        markCompleted.textContent = 'Mark as Completed';
        markCompleted.className = 'mark-completed';
        markCompleted.addEventListener('click', function() {
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change'));
        });

        const label = document.createElement('label');
        label.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(markCompleted);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteButton);

        return taskItem;
    }

    function createCompletedTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item completed';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        const label = document.createElement('label');
        label.textContent = taskText;

        taskItem.appendChild(deleteButton);
        taskItem.appendChild(label);

        return taskItem;
    }
});
