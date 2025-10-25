import React, { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <div className="container mt-5">
      <h1>{message}</h1>
    </div>
  )
}

