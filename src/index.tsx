import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const container = document.getElementById('root') as HTMLElement

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
const root = createRoot(container)
root.render(application)

