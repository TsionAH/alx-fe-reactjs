import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './components/Search'

export default function App() {
  return (
    <BrowserRouter>
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
