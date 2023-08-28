import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './Context/userContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
        
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)