import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import UserCard from '../components/UserCard'
import github from '../services/github'

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(q) {
    if (!q) {
      setUsers([])
      return
    }
    setLoading(true)
    setError(null)
    try {
      const data = await github.searchUsers(q)
      setUsers(data.items || [])
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Error searching users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'grid', gap: 12 }}>
        {users.map(u => <UserCard key={u.id} user={u} />)}
      </div>
    </div>
  )
}
