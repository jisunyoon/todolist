document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const emptyState = document.getElementById('emptyState');

    const totalTodos = document.getElementById('totalTodos');
    const completedTodos = document.getElementById('completedTodos');
    const pendingTodos = document.getElementById('pendingTodos');

    const filterBtns = document.querySelectorAll('.filter-btn');

    let todos = [];
    let currentFilter = "all";
  
    // ===============================
    // [기능 1] 할 일 추가
    // ===============================

    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newTodo = {
        id: crypto.randomUUID(),
        text: todoInput.value.trim(),
        completed: false
      }

      if(newTodo.text === ""){return}

      todos.push(newTodo);
      todoInput.value = "";

      renderTodos();
      updateState();
    })
  
    // ===============================
    // [기능 2] 할 일 목록 렌더링
    // ===============================
    
    function renderTodos(){
      todoList.innerHTML = "";

      if(todos.length === 0){
        emptyState.style.display = "block";
      } else{
        emptyState.style.display = "none";
      }

      todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.className = "flex justify-between items-center p-4";

        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.checked = todo.completed;
        todoCheckbox.className = "w-4 h-4 text-indigo-600 border-gray-300 rounded mr-2";

        todoCheckbox.addEventListener('click', () => {
          todo.completed = todoCheckbox.checked;
          updateState();
          renderTodos();
        })

         // 할 일 텍스트
        const todoText = document.createElement("span");
        todoText.innerText = todo.text;
        todoText.className = todo.completed ? "line-through text-gray-400" : "text-gray-800";

        // 삭제 버튼
        const todoDelete = document.createElement("button");
        todoDelete.innerText = "x";
        todoDelete.className = "rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center w-5 h-5";

        // 삭제 버튼 클릭 시 
        todoDelete.addEventListener('click', () => {
          todos = todos.filter(item => item.id !== todo.id);
          renderTodos();
          updateState();
        })
  
        // todoItem에 추가 
        todoItem.appendChild(todoCheckbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoDelete);
        todoList.appendChild(todoItem);
      })

    }

    // ===============================
    // [기능 3] 상태(전체 완료 진행중) 통계 업데이트
    // ===============================

    function updateState(){
      const total = todos.length;
      const completed = todos.filter(todo => todo.completed).length;
      const pending = total - completed;

      totalTodos.innerText = total;
      completedTodos.innerText = completed;
      pendingTodos.innerText = pending;
    }
  });

    // ===============================
    // [기능 4] todos 데이터 유지 
    // ===============================

    // ===============================
    // [기능 5] 필터 버튼 클릭 시 todos 상태에 따라 렌더링
    // ===============================
  