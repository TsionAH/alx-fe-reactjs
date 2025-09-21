import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>GitHub User Search</h1>
        </Link>
      </header>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
