const tasks = [
    { description: "Buy groceries", completed: false },
    { description: "Clean the house", completed: true },
    { description: "working out", completed: false }
];

function addTask(tasks, description)
{
    const newTask = { description, completed: false}
    return [...tasks, newTask]
}
function removeCompletedTasks(tasks){
    return tasks.filter(task => task.completed);
}

function getIncompletedTask(tasks)
{
    return tasks.filter(task => !task.completed)
}
const updatedTask = addTask(tasks, "Finish homework")
console.log(updatedTask)


const incompletedTask = getIncompletedTask(updatedTask)
console.log(tasks)

//  delte button

let textarea = document.getElementById('text')
let buttonDelte = document.getElementById('btn')

buttonDelte.onclick = deleteText = () =>{
    textarea.

};
console.log(lastName)
