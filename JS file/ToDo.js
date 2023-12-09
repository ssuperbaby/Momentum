const ToDoForm = document.querySelector("#ToDoForm");
const ToDoText = document.querySelector("#ToDoText");
const ToDoList = document.querySelector("#ToDoList");

let Todos = [];
/** Form submit에 사용 */
function AllTodo(event) {
  event.preventDefault();
  const text = ToDoText.value;
  AddTodo(text);
  ToDoText.value = "";
}
/** 새로고침할 때 Todo 불러오기 */
function LoadTodo() {
  const arr = JSON.parse(localStorage.getItem("TODO"));
  arr.forEach((element) => {
    SaveLocalTodo(element);

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = element.id;
    li.appendChild(span);
    span.innerText = element.text;
    span.appendChild(button);
    button.innerText = "X";

    button.addEventListener("click", RemoveTodo);

    ToDoList.appendChild(li);
  });
}
/** 솔직히 필요없는데 걍 만듬. 삭제할까 */
function SaveLocalTodo(Newtodo) {
  Todos.push(Newtodo);
  localStorage.setItem("TODO", JSON.stringify(Todos));
}
/** 리스트 추가하는 함수*/
function AddTodo(Newtodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const TodoObj = {
    text: Newtodo,
    id: Date.now(),
  };
  li.id = TodoObj.id;
  li.appendChild(span);
  span.innerText = Newtodo;
  span.appendChild(button);
  button.innerText = "X";

  button.addEventListener("click", RemoveTodo);

  ToDoList.appendChild(li);

  SaveLocalTodo(TodoObj);
}
/** 로컬스토리지에서도 삭제, 리스트에서도 삭제 */
function RemoveTodo(event) {
  const li = event.target.parentElement.parentElement;
  Todos = Todos.filter((todo) => todo.id !== parseInt(li.id));
  localStorage.setItem("TODO", JSON.stringify(Todos));
  li.remove();
}

ToDoForm.addEventListener("submit", AllTodo);

if (localStorage.getItem("TODO") !== null) {
  LoadTodo();
}
