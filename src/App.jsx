import { useState } from 'react';
import styles from './App.module.css';
import { Panel } from './components/Panel';
import { TodoItem } from './components/TodoItem';
import { nanoid } from 'nanoid';

function App() {
  const [todos, setTodos] = useState([
    { id: nanoid(), text: '리액트 공부하기', isDone: false },
    { id: nanoid(), text: '책 읽기', isDone: true },
    { id: nanoid(), text: '운동하기', isDone: false },
  ]);

  const [inputText, setInputText] = useState('');

  const handleInputChange = ({ target }) => {
    setInputText(target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    const newTodo = {
      id: nanoid(),
      text: inputText,
      isDone: false,
    };
    setTodos((prevList) => [...prevList, newTodo]);
    setInputText('');
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter') return;
    if (event.nativeEvent.isComposing) return;
    handleAddTodo();
  }

  const handleToggle = (targetId) => {
    const newTodos = todos.map((todo) =>
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }

  const handleRemove = (targetId) => {
    setTodos((prevList) => prevList.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>오늘의 할 일</h1>
        <p className={styles.today}>
          오늘은 {new Date().toLocaleDateString()}입니다.
        </p>
      </div>
      <Panel>
        <section className={styles.inputSection}>
          <input
            className={styles.todoInput}
            type="text"
            placeholder='새로운 할 일을 입력하세요'
            value={inputText}
            onChange={(event) => handleInputChange(event)}
            onKeyDown={(event) => handleKeyDown(event)}
          />
          <button className={styles.addButton} onClick={handleAddTodo}>
            추가
          </button>
        </section>
      </Panel>
      <Panel>
        {todos.length === 0 ? (
          <p className={styles.empty}>할 일이 없어요</p>
        ) : (
          <ul className={styles.todoList}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onRemove={handleRemove}
              />
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );

}

export default App;