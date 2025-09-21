import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  function submit(e) {
    e.preventDefault()
    onSearch(q.trim())
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search GitHub users (e.g. torvalds)"
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
    </form>
  )
}
