const list = document.querySelector(".todo-list")
const todoInput = document.getElementById("todoInput")
const todoBtn = document.getElementById("todoBtn")

todoBtn.addEventListener("click", () => {
    console.log(todoInput.value)
    list.innerHTML += `<li>${todoInput.value}</li>`
})