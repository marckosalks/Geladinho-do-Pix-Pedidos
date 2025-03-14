import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { App } from './App.tsx'
import { SaborProvider } from './context/saborContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SaborProvider>
      <App />
    </SaborProvider>
  </StrictMode>,
)
