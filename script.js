//your code here

document.addEventListener("DOMContentLoaded", function () {
  const newTodoInput = document.getElementById("newTodoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener("click", function () {
    const todoText = newTodoInput.value.trim(); // Trim removes leading/trailing spaces

    if (todoText !== "") {
      // Check if the input is not empty
      const listItem = document.createElement("li");
      listItem.textContent = todoText;
      todoList.appendChild(listItem);
      newTodoInput.value = ""; // Clear the input field
    }
  });

  newTodoInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTodoBtn.click(); // Trigger the button click event when Enter is pressed
    }
  });
});
