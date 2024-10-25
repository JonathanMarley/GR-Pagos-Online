import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
