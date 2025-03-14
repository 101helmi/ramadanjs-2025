document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
  
    // Function to add a task to the list
    function addTask(taskContent) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="task-text">${taskContent}</span>
        <button class="delete-btn">Delete</button>
      `;
      
      // Add event listener to delete button
      li.querySelector('.delete-btn').addEventListener('click', function () {
        li.remove();
      });
  
      // Add event listener to toggle task completion
      li.addEventListener('click', function () {
        li.classList.toggle('completed');
      });
  
      // Append the task to the list
      todoList.appendChild(li);
    }
  
    // Add task when "Add Task" button is clicked
    addBtn.addEventListener('click', function () {
      const taskContent = todoInput.value.trim();
  
      if (taskContent) {
        addTask(taskContent);
        todoInput.value = ''; // Clear input field
      }
    });
  
    // Add task when pressing Enter key
    todoInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const taskContent = todoInput.value.trim();
  
        if (taskContent) {
          addTask(taskContent);
          todoInput.value = ''; // Clear input field
        }
      }
    });
  });
  