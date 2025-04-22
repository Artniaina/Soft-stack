import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PlannerProvider } from './context/usePlannerContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlannerProvider> 
      <App />
    </PlannerProvider>
  </StrictMode>,
)
