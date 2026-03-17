import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const TestPage = lazy(() => import('./test/TestPage'))

const path = window.location.pathname
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path.startsWith('/test') ? (
      <Suspense fallback={null}>
        <TestPage />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
)
