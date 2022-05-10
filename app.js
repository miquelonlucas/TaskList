// UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter');
const taskInput = document.querySelector('#task');

// Load EventListeners (call)
loadEventListeners();

// Load EventListeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}


// FUNCTIONS

// Add task event
function addTask(e){
    if(taskInput.value === ''){
        return alert('I\'ve got a blank space, baby.');
        e.preventDefault();
    }

    
    // Create li element
    const li = document.createElement('li');
    
    // Add class to li
    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(taskInput.value));
    
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    
    link.innerHTML = '<i class="fa fa-remove"><\i>';

    li.appendChild(link);

    taskList.appendChild(li);

    console.log(li);
    
    taskInput.value = '';

    e.preventDefault();
}
