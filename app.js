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

// Task counter
function taskCounter(){
    let taskListLength = $(".collection-item").children().length;
    return taskListLength;
}



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
    
    if(taskInput.value.toLowerCase() === 'workout' || taskInput.value.toLowerCase() === 'study'){
        li.classList.add('white-text');
        li.classList.add('red');
        li.classList.add('lighten-1');
    }

    li.appendChild(document.createTextNode(taskInput.value));
    
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    
    link.innerHTML = '<i class="fa fa-remove"><\i>';

    li.appendChild(link);

    taskList.appendChild(li);

    console.log(li);
    
    taskInput.value = '';

    if (taskCounter() != 0){
        let taskTitle = document.querySelector('#task-title');
        taskTitle.innerHTML = `Tasks<span class="badge">${taskCounter()} to go</span>`;
    } 

    e.preventDefault();
}
