const NameForm = document.querySelector("#NameForm");
const NameInput = document.querySelector("#NameInput");
const HelloName = document.querySelector("#HelloName");
const SavedName = localStorage.getItem("username");
const Logout = document.querySelector("#Logout");

function Hello(event) {
  event.preventDefault();
  const NickName = NameInput.value;
  localStorage.setItem("username", NickName);

  HelloName.innerText = `안녕하세요. ${NickName}님`;
  Login();
}

function Login() {
  NameInput.classList.add("hidden");
  HelloName.classList.remove("hidden");
  Logout.classList.remove("hidden");
}

function reset(event) {
  event.preventDefault();
  NameInput.classList.remove("hidden");
  HelloName.classList.add("hidden");
  Logout.classList.add("hidden");
  localStorage.removeItem("username");
}

Logout.addEventListener("click", reset);
NameForm.addEventListener("submit", Hello);

if (SavedName !== null) {
  HelloName.innerText = `안녕하세요. ${SavedName}님`;
  Login();
}
