document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addTodoItem);
  
    const todoList = document.getElementById("todoList");
    todoList.addEventListener("change", handleCheckboxChange);
  
    function addTodoItem() {
      const todoInput = document.getElementById("todoInput");
      const todoText = todoInput.value.trim();
  
      if (todoText !== "") {
        const todoItem = document.createElement("li");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
  
        const todoLabel = document.createElement("label");
        todoLabel.textContent = todoText;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
          todoItem.remove();
        });
  
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoLabel);
        todoItem.appendChild(deleteButton);
  
        todoList.appendChild(todoItem);
  
        todoInput.value = "";
      }
    }
  
    function handleCheckboxChange(event) {
      if (event.target.matches("input[type='checkbox']")) {
        const todoItem = event.target.parentElement;
        if (event.target.checked) {
          todoItem.classList.add("completed");
          todoList.appendChild(todoItem);
        } else {
          todoItem.classList.remove("completed");
          const completedItems = todoList.querySelectorAll(".completed");
          let insertBeforeNode = null;
          for (const item of completedItems) {
            if (item !== todoItem && todoList.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_PRECEDING) {
              insertBeforeNode = item;
            }
          }
          todoList.insertBefore(todoItem, insertBeforeNode ? insertBeforeNode.nextElementSibling : todoList.firstChild);
        }
      }
    }
  });
  