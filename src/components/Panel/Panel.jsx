import styles from './Panel.modules.css';

export function Panel({ children }) {
  return <section className={styles.panel}>{children}</section>;
}