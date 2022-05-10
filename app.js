// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

// REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child Element
list.removeChild(lis[2]);

document.querySelector('.clear-tasks').addEventListener('click', removeTask);

function removeTask(e){

    let val = e;
    val = val.target;


    console.log(val);
}

// Add Task

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear Input 
taskInput.value = '';

taskInput.addEventListener('keydown', runEvent);

function runEvent(e){
    console.log(e.target.value);

    heading.innerText = e.target.value;
}

// function (){
//     let taskList = document.querySelector('.collection');
    
//     let newListItem = document.createElement("li");
    
//     newListItem.appendChild(document.createTextNode("New Item"));

// }
