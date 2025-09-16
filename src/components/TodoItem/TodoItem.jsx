import clsx from 'clsx';
import styles from './TodoItem.module.css';
import { CiTrash } from 'react-icons/ci';

export function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={styles.todoItem}>
      <span
        className={clsx(styles.todoText, todo.isDone && styles.done)}
        onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button className={styles.deleteButton} onClick={() => onRemove(todo.id)}>
        <CiTrash className={styles.trash} />
      </button>
    </li>
  );
}