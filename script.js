function addTask() {
    const taskInput = document.getElementById('input-box');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.textContent = taskValue;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.addEventListener('click', function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(span);

    // Add an event listener to the list item for toggling the checked state
    li.addEventListener('click', function () {
        li.classList.toggle('checked');
    });

    listContainer.appendChild(li);
    taskInput.value = '';
}
