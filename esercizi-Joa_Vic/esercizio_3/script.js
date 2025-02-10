//agregar un dato y luego puedo marcarlo como completado, la pagina debe guardar los dato y debe tener funciones crud(create, read, update e delete)
//y debe contener en automatico la fecha de cuando se agrego la informacion

var todos = [];

var memory = localStorage.getItem('todos');

if (memory != null && memory.trim().length > 0) {

    todos = memory.split(',');

    printTodos();
}


function salvaTesto() {
    const testo = document.getElementById("testo").value.trim();
    if (testo.length > 0) {
        todos.push(testo + '|0');
        updateAndRender();
    }
}

function printTodos() {
    var lista = document.getElementById("lista");
    lista.innerHTML = '';
    for (var i = 0; i < todos.length; i++) {
        var todoData = getTodo(i);
        var todo = todoData[0];
        var li = document.createElement("li");
        if (todoData[1] === '1') {
            li.classList.add("completed");
        }

        var deleteButton = createButton('elimina', removeTodo, i);
        var completedButton = createButton('completa', completeTodo, i);
        li.innerHTML += todo + ' ';
        li.appendChild(deleteButton);
        li.appendChild(completedButton);
        lista.appendChild(li);
    }
}

function createButton(buttonText, buttonFunction, index) {
    var button = document.createElement("button");
    button.onclick = buttonFunction;
    button.textContent = buttonText;
    button.dataset.index = index;
    return button;
}


function removeTodo(event) {
    var button = event.target;
    var indexToRemove = button.dataset.index;
    todos.splice(indexToRemove, 1);
    updateAndRender();
}

function updateAndRender() {
    saveTodos();
    printTodos();
}

function saveTodos() {
    localStorage.setItem("todos", todos);
}

function completeTodo() {
    var button = event.target;
    var indexToComplete = button.dataset.index;
    var todoData = getTodo(indexToComplete);
    todoData[1] = 1;
    todos[indexToComplete] = todoData.join('|');
    updateAndRender();
}

function getTodo(index) {
    return todos[index].split('|');
}