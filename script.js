const listTasks = [];

const input = document.querySelector("input[name='task']");
const selectStatusTask = document.querySelector("select[name='selectStatusTask']");
const button = document.querySelector("button[name='addTask']");
const buttonDelTask = document.querySelector("button[name='delTask']");
const todoList = document.querySelector(".todoList");
const divActions = document.querySelector("div.actions");

showTasks();

function showAddButton(){
  const addButton = "<button type='button' onClick='addTask()'>Adicionar</button>";
  divActions.innerHTML = addButton;
}

function showEditButton(key){
  const editButton = `<button type='button' onClick='updateTask(${key})'>Editar</button>`;
  divActions.innerHTML = editButton;
}

function showTasks(){
  let newLiTag = "";
  listTasks.forEach((element, key) => {
    newLiTag += `<li>`;
    newLiTag += `<div class="content">`;
    newLiTag += `<p>${element.title}</p>`;
    newLiTag += `<span class="${element.status.toLowerCase()}">${element.status}</span>`;
    newLiTag += `</div>`;
    newLiTag += `<div class="actions">`;
    newLiTag += `<span onClick="editTask(${key})" class="icon"><i class="fas fa-edit"></i></span>`;
    newLiTag += `<span onClick="delTask(${key})" class="icon"><i class="fas fa-trash"></i></span>`;
    newLiTag += `</div>`;
    newLiTag += `</li>`;
  });
  todoList.innerHTML = newLiTag;
  input.value = "";
  selectStatusTask.value = "Iniciada";
}

function editTask(key) {
  const task = listTasks[key];
  input.value = task.title;
  selectStatusTask.value = task.status;
  showEditButton(key);
}

function delTask(key) {
  listTasks.splice(key, 1);
  showTasks();
  showAddButton();
}

function addTask(){
  if(input.value) {
    listTasks.push({title: input.value, status: selectStatusTask.value});
    showTasks();
  }
}

function updateTask(key) {
  listTasks[key].title = input.value;
  listTasks[key].status = selectStatusTask.value;
  showAddButton();
  showTasks();
}


