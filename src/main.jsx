import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css';
import './styles/main.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* "public/index.html 파일 안에 있는 'root'라는 ID를 가진 <div> 요소를 찾아서, 우리가 만든 App 컴포넌트를 그 안에 그려줘!" */
