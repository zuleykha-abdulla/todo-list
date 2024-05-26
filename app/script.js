function addTodo() {
    let inputValue = document.getElementById("todoInput").value;

    if (inputValue === "") {
      alert("Zəhmət Olmasa Task Girin");
      return;
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `
            <div>
                <input type="checkbox" onclick="toggleComplete(this)" />
                <span>${inputValue}</span>
            </div>
            <button onclick="deleteTodo(this)">Delete</button>
        `;
    document.getElementById("todoList").appendChild(listItem);

    // Clear the input field
    document.getElementById("todoInput").value = "";
  }

  function deleteTodo(button) {
    let todoItem = button.parentNode;
    todoItem.parentNode.removeChild(todoItem);
  }

  function toggleComplete(checkbox) {
    let todoItem = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
      todoItem.classList.add("completed");
    } else {
      todoItem.classList.remove("completed");
    }
  }