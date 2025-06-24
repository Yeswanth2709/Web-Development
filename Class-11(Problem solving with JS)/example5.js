// Goal: Build a basic To-Do list using objects and arrays (no UI).
// Each To-Do item should be an object:
// {
//   task: "Buy groceries",
//   isCompleted: false
// }

// Features to Implement:
//     addTask(task): Adds a new task.
//     removeTask(task): Removes a task.
//     markComplete(task): Marks a task as completed.
//     listTasks(): Lists all tasks, showing completed ones differently.

function createTodoList() {
  let tasks = [];
  
  function addTask(task) {
    tasks.push({
        task:task,
        isCompleted:false
    });
  }

  function removeTask(task) {
    let index=tasks.findIndex(t=>t.task===task);
    tasks.splice(index,1);
  }

  function markComplete(task) {
    let index=tasks.findIndex(t=>t.task===task);
    tasks[index].isCompleted=true;
  }

  function listTasks() {
   console.log(tasks);
  }

  return {
    addTask,
    removeTask,
    markComplete,
    listTasks
  };
}

const todo = createTodoList();
todo.addTask("Buy groceries");
todo.addTask("Do laundry");
todo.addTask("Clean room");
todo.listTasks();
console.log("-----");
todo.markComplete("Buy groceries");
todo.listTasks();
console.log("-----");
todo.removeTask("Do laundry");
todo.listTasks();