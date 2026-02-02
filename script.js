const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const taskList = document.getElementById("taskList");

let taskToEdit = null;

// Add task
addBtn.addEventListener("click", addTask);
updateBtn.addEventListener("click", updateTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = () => li.classList.toggle("completed");

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(li, span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Edit task
function editTask(li, span) {
    taskInput.value = span.textContent;
    taskToEdit = span;

    addBtn.style.display = "none";
    updateBtn.style.display = "inline-block";
}

// Update task
function updateTask() {
    if (taskToEdit) {
        taskToEdit.textContent = taskInput.value.trim();
        taskToEdit = null;

        taskInput.value = "";
        addBtn.style.display = "inline-block";
        updateBtn.style.display = "none";
    }
}
