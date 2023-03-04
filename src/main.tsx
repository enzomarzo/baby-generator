import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './components/content/Content'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
)
