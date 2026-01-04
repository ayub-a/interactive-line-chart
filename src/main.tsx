import { createRoot } from 'react-dom/client'

import './styles/index.css'

import { ThemeProvider } from './context/theme'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
