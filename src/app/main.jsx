import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '../pages/App.jsx'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { baseTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
