import { useState } from 'react';
import { nanoid } from 'nanoid';
import { TodoItem } from './components/TodoItem';
import { Panel } from './components/Panel';
import style from './App.module.css';

function App() {
  /* 할 일 목록 관리할 state */
  const [todos, setTodos] = useState([
    { id: nanoid(), text: '리액트 기초 배우기', isDone: true },
    { id: nanoid(), text: 'To-do List 앱 만들기', isDone: false },
  ]);

  /* 입력창의 값을 관리할 state */
  const [inputText, setInputText] = useState('');

  /* input 값이 바뀔 때마다 상태 업데이트 */
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  /* 한글 입력 중일 때는 Enter 키 동작을 무시 */
  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' || event.nativeEvent.isComposing) {
      return;
    }
    handleAddTodo();
  }

  /* '추가' 버튼 클릭 시 todos 업데이트 */
  const handleAddTodo = () => {
    if (inputText.trim() === '') return; /* 빈 값은 추가하지 않음 */
    const newTodo = {
      id: nanoid(),
      text: inputText,
      isDone: false,
    };
    setTodos((prev) => [...prev, newTodo]); /* 기존 배열 복사 + 새 값 추가 */
    setInputText(''); /* 입력창 비우기 */
  }

  /* 할 일 삭제 */
  const handleDelete = (todoId) => {
    /* todoId와 일치하지 않는 항목들만 모아 '새로운 배열'을 만든다. */
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  /* 할 일 완료/미완료 토글 */
  const handleToggle = (todoId) => {
    setTodos((prev) =>
      prev.map((todo => (todo.id === todoId ? { ...todo, isDone: !todo.isDone } /*새로운 객체 반환*/
        : todo)) /* 나머지는 기존 객체 반환 */
      ));
  }


  return (
    <div className={style.appContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>오늘의 할 일</h1>
        <p className={style.today}>오늘은 {new Date().toLocaleDateString()}입니다.</p>
      </div>

      <Panel>
        <div className={style.inputContainer}>
          <input
            type="text"
            className={style.todoInput}
            placeholder="새로운 할 일을 입력하세요"
            value={inputText}
            onChange={handleInputChange} />
          <button className={style.addButton} onClick={handleAddTodo}>추가</button>
        </div>
      </Panel>

      {/*
        todos 배열의 길이가 0이면 "할 일이 없어요! 메시지를,
        0이 아니면 할 일 목록(ul)을 보여줍니다. 
        */}
      <Panel>
        {todos.length === 0 ? (
          <p className={style.empty}>
            할 일이 없어요! 새 할 일을 추가해보세요.
          </p>
        ) : (
          <ul className={style.todoList}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete} />
            ))}
          </ul>
        )}
      </Panel>
    </div >
  );
}

export default App;