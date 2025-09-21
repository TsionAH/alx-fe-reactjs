import React, { useState } from 'react'
import githubService from '../services/githubService'

export default function Search() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim()) return

    setLoading(true)
    setError(null)
    setUserData(null)

    try {
      const data = await githubService.fetchUserData(username.trim())
      setUserData(data)
    } catch (err) {
      setError('Looks like we can’t find the user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      {/* Input form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div style={{
          padding: 16,
          border: '1px solid #ddd',
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            height="100"
            style={{ borderRadius: '50%' }}
          />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  )
}
