import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container mt-5">
      <h1>Hello from React + Bun!</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

