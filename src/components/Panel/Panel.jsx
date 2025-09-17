import './Panel.module.css';

export function Panel({ children }) {
  return (
    <section className="panel">{children}</section>
  );
}
