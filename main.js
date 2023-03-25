// Set our variables
var title = document.getElementById('title');
var description = document.getElementById('description');
var date = document.getElementById('date');
var submit = document.getElementById('todo-button');
var toDoItems = document.getElementById('todo-items');

// Initialize our values
let id = 0;
let allToDo = []

function generateID(){
  return id += 1
}

// Create to-do class
class ToDo {
  constructor(title, description, date, id){
    this.title = title;
    this.description = description;
    this.date = date;
    this.id = id;
  }
}

// Creating our submit event
submit.addEventListener('click', function(event){
  // Prevent default browser refresh behaviour
  event.preventDefault();

  // Create a new instance of a to-do item
  var todo = new ToDo(title.value, description.value, date.value, generateID())
  console.log('New To-do', todo)

  // Creating elements
  var newToDoDiv = document.createElement('div')
  var todoTitleElement = document.createElement('h3')
  var todoDescElement = document.createElement('p')
  var todoDateElement = document.createElement('h6')
  var todoEditBtnElement = document.createElement('span')
  var todoDeleteBtnElement = document.createElement('span')
  var underline = document.createElement('hr')

  // Add elements into the new div
  newToDoDiv.appendChild(todoTitleElement)
  newToDoDiv.appendChild(todoDescElement)
  newToDoDiv.appendChild(todoDateElement)
  newToDoDiv.appendChild(underline)
  newToDoDiv.appendChild(todoDeleteBtnElement)
  newToDoDiv.appendChild(todoEditBtnElement)

  // Add text content to each element
  todoTitleElement.innerText = todo.title
  todoDescElement.innerText = todo.description
  todoDateElement.innerText = todo.date
  todoEditBtnElement.innerText = "edit_square"
  todoDeleteBtnElement.innerText = "delete"

  // Dynamically add classes to elements
  newToDoDiv.classList.add('todo-item')
  todoDeleteBtnElement.classList.add('material-symbols-outlined', 'delete-icon')
  todoEditBtnElement.classList.add('material-symbols-outlined', 'edit-icon')

  // Add delete functionality to delete button
   todoDeleteBtnElement.addEventListener('click', function(){
     alert('Are you sure you want to delete this to-do item?')
     newToDoDiv.style.display = "none";
   })

  toDoItems.appendChild(newToDoDiv)

})

var todo1 = new ToDo('Wash dishes', 'Need to clean counter and sink', '08-08-2022', 1)
console.log(todo1)

console.log(title.value)
