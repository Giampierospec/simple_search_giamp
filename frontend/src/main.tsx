import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SearchResultContextProvider from './context/searchResultContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchResultContextProvider>
      <App />
    </SearchResultContextProvider>
  </React.StrictMode>
)
