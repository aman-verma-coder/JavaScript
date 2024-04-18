let todo = [];
let request = prompt("Enter your request");
while (true) {
    if (request == "Quit") {
        console.log("Quitting the app");
        break;
    }
    if (request == "Add") {
        let task = prompt("Enter the task which you want to add");
        todo.push(task);
        console.log("Task Added");
    }
    else if (request == "List") {
        for (let i = 0; i < todo.length; i++) {
            console.log(i,todo[i]);
        }
    }
    else if (request == "Delete") {
        let index = prompt("Enter the index of the task");
        todo.splice(index, 1);
        console.log("Task Deleted");
    }
    request = prompt("Enter your request");
}