var todos = [];
function addTodo(title) {
    var newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}
function toggleTodo(id) {
    var todo = todos.find(function (todo) { return todo.id == id; });
    if (todo) {
        todo.completed = !todo.completed;
    }
}
addTodo('API Appication');
addTodo('Angular');
toggleTodo(1);
console.log(todos);
