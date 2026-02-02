import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div className="w-full h-full bg-gray-200 relative ">
      <div className="w-full h-3/4 bg-blue-500 absolute p-5"></div>
    </div>
  </StrictMode>,
)
