tasks = ["Attend session"]

document.getElementById("descrip").textContent = "werty dfgh rtyu fgh rty fgh"

// console.log(document.querySelector("tasksUL"),"while loading")



function updateTask(ind){
    console.log(ind,"Updated")
    ulElmts = document.getElementById("tasksUL")
    console.log(ulElmts,"Update function")
}
function deleteTask(ind){
    tasks.splice(ind,1)
    // console.log(tasks)
    renderTasks()
}


function renderTasks(){
    document.getElementById("tasksUL").innerHTML = tasks.map((task,i)=>`
        <li>
        ${task}
         <button class="btn btn-success" onclick="updateTask(${i})">Update</button>
         <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>
         </li>

    `).join("")
}


function addNewTask(){
    inputElement =document.getElementById("inputToDo")
    newToDo = inputElement.value
    tasks.push(newToDo)
    renderTasks()
    inputElement.value = ''
console.log(document.getElementById("tasksUL"),"after task added")

}




renderTasks()