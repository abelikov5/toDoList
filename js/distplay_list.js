let TaskList = document.getElementById('taskList');
function distplayList (task){
    Array.isArray(task);
    let unId = "task-" + Math.random();
    let newTask = document.createElement('div');
    newTask.id = unId;
    newTask.classList.add('taskElement');
    newTask.innerHTML = '<div class="taskTitle">' + task[0] + '</div><button class="deleteTask">delete</button>' + '<div class="taskText">' + task[1] + '</div>'; 
    TaskList.prepend(newTask);

}

TaskList.addEventListener('click', onDeleteTask);

function onDeleteTask({target}) {
    if(target.classList.contains('deleteTask')) {

        // console.log(e);
        console.log(target.parentElement.id);
        let targetElement = document.getElementById(target.parentElement.id);

        targetElement.remove();
        // console.log(this.parentNode.getAttribute('id') );

        //  console.log(this.id(idParent));
    }
       
}