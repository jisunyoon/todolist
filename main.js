import { v4 as uuid } from 'uuid';

document.addEventListener("DOMContentLoaded", () => {
    // 1. 주요 DOM 요소 선택
    // - 입력폼(todoForm)
    // - 입력창(todoInput)
    // - 리스트(todoList)
    // - emptyState (할 일 없을 때 메시지)
    // - 필터 버튼들(filterAll, filterPending, filterCompleted)
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const emptyState = document.getElementById('emptyState');

  
    // 2. 할 일을 저장할 배열 준비
    // todos = [{ id, text, completed }, ...]
    todos = [];
  
    // ===============================
    // [기능 1] 할 일 추가
    // ===============================
    // - form의 submit 이벤트 사용
    // - 입력값 가져와서 새로운 todo 객체 생성
    // - todos 배열에 push
    // - 입력창 초기화
    // - renderTodos() 호출로 UI 업데이트

    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newTodo = {
        id: uuid,
        text: todoInput.value.trim(),
        completed: false
      }
      
      if(newTodo.text === ""){return}

      todos.push(newTodo);
      todoInput.value = "";
    })
  
    // ===============================
    // [기능 2] 할 일 삭제
    // ===============================
    // - 삭제 버튼 클릭 시 실행할 함수 deleteTodo(id)
    // - filter()를 사용해 해당 id 제외
    // - renderTodos() 호출
  
    // ===============================
    // [기능 3] 완료 / 미완료 토글
    // ===============================
    // - 완료 버튼 클릭 시 toggleTodo(id) 실행
    // - todos 배열에서 해당 id 찾아 completed 값 반대로 변경
    // - renderTodos() 다시 호출
  
    // ===============================
    // [기능 4] 필터링 (전체 / 진행중 / 완료)
    // ===============================
    // - 현재 선택된 필터 상태를 저장 (예: currentFilter = "all")
    // - 버튼 클릭 시 currentFilter 값 업데이트
    // - renderTodos() 실행할 때 currentFilter 값 기준으로 todos를 걸러서 보여줌
    //    - all → todos 그대로
    //    - pending → todos.filter(todo => !todo.completed)
    //    - completed → todos.filter(todo => todo.completed)
  
    // ===============================
    // [기능 5] 할 일 목록 렌더링
    // ===============================
    // - renderTodos()는 화면에 리스트를 그리는 역할
    // - todoList.innerHTML = "" 로 초기화
    // - todos 배열(or 필터링된 배열) 순회하며 HTML 요소 생성
    // - 각 항목마다 삭제 버튼, 완료 버튼 생성 및 이벤트 연결
    // - todos가 없으면 emptyState 보이기, 있으면 숨기기
  
    // ===============================
    // [추가 기능] 통계 업데이트
    // ===============================
    // - 전체(todo.length)
    // - 완료(todo.completed === true)
    // - 진행중(todo.completed === false)
    // - renderTodos() 안에서 카운트 업데이트
  });
  